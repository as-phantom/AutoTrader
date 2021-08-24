import { Injectable } from '@angular/core';
import { API } from 'aws-amplify';
import gql from 'graphql-tag';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ad, Favorite } from 'src/API';

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

  public loadFavorites(userID: string): Observable<Ad[]> {
    return from(
      API.graphql({
        query: gql`
          query ListFavorites($filter: ModelFavoriteFilterInput) {
            listFavorites(filter: $filter) {
              items {
                id
                userID
                adID
                ad {
                  id
                  make
                  model
                  color
                  engine
                  price
                  year
                  mileage
                  region {
                    id
                    name
                  }
                  favorites {
                    items {
                      id
                      userID
                    }
                  }
                  pictures {
                    items {
                      url
                    }
                  }
                  ratings {
                    items {
                      id
                      userID
                      rating
                    }
                  }
                  transmission
                  description
                  fuel
                  phone
                  picture
                  condition
                  longitude
                  latitude
                  userID
                  currency
                }
              }
            }
          }
        `,
        variables: {
          filter: {
            userID: {
              eq: userID,
            },
          },
        },
      }) as Promise<{ data: { listFavorites: { items: Favorite[] | null } } }>
    ).pipe(
      map(
        ({
          data: {
            listFavorites: { items },
          },
        }) => items!.map((item) => item.ad!)
      )
    );
  }
}
