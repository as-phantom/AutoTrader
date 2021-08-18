import { Injectable } from '@angular/core';
import { API } from 'aws-amplify';
import gql from 'graphql-tag';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ad, Condition } from 'src/API';

@Injectable({
  providedIn: 'root',
})
export class AdsService {
  constructor() {}

  public loadAdsByFilters({
    region,
    condition,
    make,
    model,
    minPrice,
    maxPrice,
  }: {
    region: string;
    condition: Condition;
    make: string;
    model: string;
    minPrice: string;
    maxPrice: string;
  }): Observable<Ad[] | null> {
    const minPriceFilter = minPrice ? { price: { ge: Number(minPrice) } } : {};
    const maxPriceFilter = maxPrice ? { price: { le: Number(maxPrice) } } : {};
    const priceFilter = { price: { ...minPriceFilter.price, ...maxPriceFilter.price } };

    const filter = {
      ...(Object.keys(priceFilter.price).length ? priceFilter : {}),
      ...(condition ? { condition: { eq: condition } } : {}),
      ...(make ? { make: { eq: make } } : {}),
      ...(model ? { model: { eq: model } } : {}),
      ...(region ? { regionID: { eq: region } } : {}),
    };

    return from(
      API.graphql({
        query: gql`
          query ListAds($filter: ModelAdFilterInput) {
            listAds(filter: $filter) {
              items {
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
                  }
                }
                pictures {
                  items {
                    url
                  }
                }
                ratings {
                  items {
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
        `,
        variables: {
          ...(Object.keys(filter).length ? { filter } : {}),
        },
      }) as Promise<{ data: { listAds: { items: Ad[] | null } } }>
    ).pipe(
      map(
        ({
          data: {
            listAds: { items },
          },
        }) => items
      )
    );
  }

  public loadAdsByUser(id: string): Observable<Ad[] | null> {
    return from(
      API.graphql({
        query: gql`
          query ListAds($filter: ModelAdFilterInput) {
            listAds(filter: $filter) {
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
                }
              }
              pictures {
                items {
                  url
                }
              }
              ratings {
                items {
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
        `,
        variables: {
          id,
        },
      }) as Promise<{ data: { listAds: { items: Ad[] | null } } }>
    ).pipe(
      map(
        ({
          data: {
            listAds: { items },
          },
        }) => items
      )
    );
  }

  public loadAdById(id: string): Observable<Ad | null> {
    return from(
      API.graphql({
        query: gql`
          query GetAd($id: ID!) {
            getAd(id: $id) {
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
                }
              }
              pictures {
                items {
                  url
                }
              }
              ratings {
                items {
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
        `,
        variables: {
          id,
        },
      }) as Promise<{ data: { getAd: Ad | null } }>
    ).pipe(map(({ data: { getAd } }) => getAd));
  }

  public editAdById(id: string): Observable<Ad | null> {
    return from(
      API.graphql({
        query: gql`
          query editAdById($id: ID!) {
            getAd(id: $id) {
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
                }
              }
              pictures {
                items {
                  url
                }
              }
              ratings {
                items {
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
        `,
        variables: {
          id,
        },
      }) as Promise<{ data: { getAd: Ad | null } }>
    ).pipe(map(({ data: { getAd } }) => getAd));
  }

  // public deleteAdById(id: string): Observable<ad | null> {
  //   return from(API.graphql({}));
  // }
}
