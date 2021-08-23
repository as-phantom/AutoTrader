import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { API } from 'aws-amplify';
import gql from 'graphql-tag';
import { from } from 'rxjs';
import { NotificationsService } from 'src/app/modules/core/services/notifications.service';
import { RatingService } from 'src/app/modules/core/services/rating.service';
import { Ad, Rating, User } from '../../../../../API';

@Component({
  selector: 'app-ad-card-small',
  templateUrl: './ad-card-small.component.html',
  styleUrls: ['./ad-card-small.component.sass'],
})
export class AdCardSmallComponent implements OnInit {
  @Input() public user: User | undefined;
  @Input() public ad!: Ad;

  public loading: boolean = false;

  constructor(
    private readonly notificationsService: NotificationsService,
    private readonly router: Router,
    private readonly ratingService: RatingService
  ) {}

  ngOnInit(): void {}

  public get rating(): number {
    const totalRating: number = this.ad?.ratings?.items?.reduce((a, c) => a! + c?.rating!, 0)!;
    const totalRatingsCount: number = this.ad?.ratings?.items?.length!;

    return totalRating / totalRatingsCount;
  }

  public get currentUserRating(): Rating | null | undefined {
    return this.ad?.ratings?.items?.find((i) => i?.userID === this.user?.id);
  }

  public getBackgroundImage(ad: Ad): string {
    return `url('${ad.picture}')`;
  }

  public onRate(rating: number): void {
    if (!this.user) {
      this.router.navigate(['/auth']);

      return;
    }
    if (this.user.id === this.ad.userID) {
      this.notificationsService.info(`You cannot rate your own ads`);

      return;
    }

    this.loading = true;

    if (this.currentUserRating) {
      this.ratingService
        .createRating({
          id: this.currentUserRating?.id,
          userID: this.user.id,
          adID: this.ad.id,
          rating,
        })
        .subscribe({
          next: ({ data: { updateRating } }) => {
            this.ad.ratings = updateRating?.ad?.ratings;
            this.loading = false;
            this.notificationsService.success('Rating updated successfully');
          },
          error: () => {
            this.loading = false;
            this.notificationsService.error('Something went wrong, try again later');
          },
        });
    } else {
      this.ratingService
        .updateRating({
          userID: this.user.id,
          adID: this.ad.id,
          rating,
        })
        .subscribe({
          next: ({ data: { createRating } }) => {
            this.ad.ratings = createRating?.ad?.ratings;
            this.loading = false;
            this.notificationsService.success('Rating submitted successfully');
          },
          error: () => {
            this.loading = false;
            this.notificationsService.error('Something went wrong, try again later');
          },
        });
    }
  }
}
