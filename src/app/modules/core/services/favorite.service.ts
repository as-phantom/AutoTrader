import { Injectable } from '@angular/core';
import { API } from 'aws-amplify';
import gql from 'graphql-tag';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Favorite } from 'src/API';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  constructor() {}

  public addFavorite(input: {
    userID: string;
    adID: string;
  }): Observable<{ data: { createFavorite: Favorite | null } }> {
    return from(
      API.graphql({
        query: gql`
          mutation CreateFavorite($input: CreateFavoriteInput!) {
            createFavorite(input: $input) {
              ad {
                favorites {
                  items {
                    id
                    userID
                  }
                }
              }
            }
          }
        `,
        variables: {
          input,
        },
      }) as Promise<{ data: { createFavorite: Favorite | null } }>
    );
  }

  public deleteFavorite(id: string): Observable<{ data: { deleteFavorite: Favorite | null } }> {
    return from(
      API.graphql({
        query: gql`
          mutation DeleteFavorite($input: DeleteFavoriteInput!) {
            deleteFavorite(input: $input) {
              id
            }
          }
        `,
        variables: {
          input: {
            id,
          },
        },
      }) as Promise<{ data: { deleteFavorite: Favorite | null } }>
    );
  }
}
