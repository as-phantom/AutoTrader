import { Injectable } from '@angular/core';
import { API } from 'aws-amplify';
import gql from 'graphql-tag';
import { from, Observable } from 'rxjs';
import { Rating } from 'src/API';

@Injectable({
  providedIn: 'root',
})
export class RatingService {
  constructor() {}

  public createRating(input: {
    userID: string;
    adID: string;
    rating: number;
  }): Observable<{ data: { createRating: Rating | null } }> {
    return from(
      API.graphql({
        query: gql`
          mutation CreateRating($input: CreateRatingInput!) {
            createRating(input: $input) {
              ad {
                ratings {
                  items {
                    id
                    userID
                    rating
                  }
                }
              }
            }
          }
        `,
        variables: {
          input,
        },
      }) as Promise<{ data: { createRating: Rating | null } }>
    );
  }

  public updateRating(input: {
    id: string;
    userID: string;
    adID: string;
    rating: number;
  }): Observable<{ data: { updateRating: Rating | null } }> {
    return from(
      API.graphql({
        query: gql`
          mutation UpdateRating($input: UpdateRatingInput!) {
            updateRating(input: $input) {
              ad {
                ratings {
                  items {
                    id
                    userID
                    rating
                  }
                }
              }
            }
          }
        `,
        variables: {
          input,
        },
      }) as Promise<{ data: { updateRating: Rating | null } }>
    );
  }
}
