import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoriteService } from 'src/app/modules/core/services/favorite.service';
import { NotificationsService } from 'src/app/modules/core/services/notifications.service';
import { RatingService } from 'src/app/modules/core/services/rating.service';
import { Ad, Favorite, Rating, User } from '../../../../../API';

@Component({
  selector: 'app-ad-card-small',
  templateUrl: './ad-card-small.component.html',
  styleUrls: ['./ad-card-small.component.sass'],
})
export class AdCardSmallComponent implements OnInit {
  @Input() public user: User | undefined;
  @Input() public ad!: Ad;

  public loadingRating: boolean = false;
  public loadingAddToFavorite: boolean = false;

  constructor(
    private readonly notificationsService: NotificationsService,
    private readonly router: Router,
    private readonly ratingService: RatingService,
    private readonly favoriteService: FavoriteService
  ) {}

  ngOnInit(): void {}

  public get rating(): number {
    const totalRating: number = this.ad?.ratings?.items?.reduce((a, c) => a! + c?.rating!, 0)!;
    const totalRatingsCount: number = this.ad?.ratings?.items?.length!;

    return totalRating / totalRatingsCount;
  }

  public get currentUserRating(): Rating | null | undefined {
    return this.ad?.ratings?.items?.find((r) => r?.userID === this.user?.id);
  }

  public get currentUserFavorite(): Favorite | null | undefined {
    return this.ad?.favorites?.items?.find((f) => f?.userID === this.user?.id);
  }

  public getBackgroundImage(ad: Ad): string {
    return `url('${ad.picture}')`;
  }

  public onAddToFavorite(): void {
    if (!this.user) {
      this.router.navigate(['/auth']);

      return;
    }
    if (this.user.id === this.ad.userID) {
      this.notificationsService.info(`You cannot add your own ads`);

      return;
    }

    this.loadingAddToFavorite = true;

    if (this.currentUserFavorite) {
      this.favoriteService.deleteFavorite(this.currentUserFavorite.id).subscribe({
        next: ({ data: { deleteFavorite } }) => {
          this.ad.favorites = deleteFavorite?.ad?.favorites;
          this.loadingAddToFavorite = false;
          this.notificationsService.success('Successfully removed from favorite');
        },
        error: (err) => {
          this.loadingAddToFavorite = false;
          this.notificationsService.error('Something went wrong, try again later');
        },
      });
    } else {
      this.favoriteService
        .addFavorite({
          userID: this.user.id,
          adID: this.ad.id,
        })
        .subscribe({
          next: ({ data: { createFavorite } }) => {
            this.ad.favorites = createFavorite?.ad?.favorites;
            this.loadingAddToFavorite = false;
            this.notificationsService.success('Successfully added to favorite');
          },
          error: (err) => {
            this.loadingAddToFavorite = false;
            this.notificationsService.error('Something went wrong, try again later');
          },
        });
    }
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

    this.loadingRating = true;

    if (this.currentUserRating) {
      this.ratingService
        .updateRating({
          id: this.currentUserRating?.id,
          userID: this.user.id,
          adID: this.ad.id,
          rating,
        })
        .subscribe({
          next: ({ data: { updateRating } }) => {
            this.ad.ratings = updateRating?.ad?.ratings;
            this.loadingRating = false;
            this.notificationsService.success('Rating updated successfully');
          },
          error: (err) => {
            this.loadingRating = false;
            this.notificationsService.error('Something went wrong, try again later');
          },
        });
    } else {
      this.ratingService
        .createRating({
          userID: this.user.id,
          adID: this.ad.id,
          rating,
        })
        .subscribe({
          next: ({ data: { createRating } }) => {
            this.ad.ratings = createRating?.ad?.ratings;
            this.loadingRating = false;
            this.notificationsService.success('Rating submitted successfully');
          },
          error: (err) => {
            this.loadingRating = false;
            this.notificationsService.error('Something went wrong, try again later');
          },
        });
    }
  }
}
