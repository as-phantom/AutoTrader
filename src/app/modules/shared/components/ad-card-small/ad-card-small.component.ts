import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { API } from 'aws-amplify';
import gql from 'graphql-tag';
import { Ad, Rating, User } from '../../../../../API';

@Component({
  selector: 'app-ad-card',
  templateUrl: './ad-card-small.component.html',
  styleUrls: ['./ad-card-small.component.sass'],
})
export class AdCardSmallComponent implements OnInit {
  @Input() public user: User | null | undefined;
  @Input() public ad: Ad | undefined;

  // @Output() public adUpdated: EventEmitter<Ad> = new EventEmitter();

  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  public get rating(): number {
    const totalRating: number = this.ad?.ratings?.items?.reduce((a, c) => a! + c?.rating!, 0)!;
    const totalRatingsCount: number = this.ad?.ratings?.items?.length!;

    return totalRating / totalRatingsCount;
  }

  public get userHasAlreadyRated(): boolean {
    return false;
    return Boolean(this.user?.ratings?.items?.find((i) => i?.adID === this.ad?.id));
  }

  public getBackgroundImage(ad: Ad): string {
    return `url('${ad.picture}')`;
  }

  public onRate(rating: number): void {
    if (!this.user) {
      this.router.navigate(['auth']);
    }

    API.graphql({
      query: gql`
        mutation CreateRating($input: CreateRatingInput) {
          createRating(input: $input) {
            ad
          }
        }
      `,
      variables: {
        input: {
          userID: this.user?.id,
          adID: this.ad?.id,
          rating,
        },
      },
    });
  }
}
