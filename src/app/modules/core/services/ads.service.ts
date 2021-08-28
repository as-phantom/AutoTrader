import { Injectable } from '@angular/core';
import { API } from 'aws-amplify';
import gql from 'graphql-tag';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ad, Condition, Picture } from 'src/API';

@Injectable({
  providedIn: 'root',
})
export class adService {
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

  public loadAdsByUser(userID: string): Observable<Ad[] | null> {
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
          filter: {
            userID: {
              eq: userID,
            },
          },
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

  public updateAd(id: string, ad: Partial<Ad>): Observable<Ad | null> {
    return from(
      API.graphql({
        query: gql`
          mutation UpdateAd($input: UpdateAdInput!) {
            updateAd(input: $input) {
              id
            }
          }
        `,
        variables: {
          input: {
            id,
            ...ad,
          },
        },
      }) as Promise<{ data: { ad: Ad | null } }>
    ).pipe(map(({ data: { ad } }) => ad));
  }

  public deleteAd(id: string): Observable<Ad | null> {
    return from(
      API.graphql({
        query: gql`
          mutation DeleteAd($input: DeleteAdInput!) {
            deleteAd(input: $input) {
              id
            }
          }
        `,
        variables: {
          input: {
            id,
          },
        },
      }) as Promise<{ data: { deleteAd: Ad | null } }>
    ).pipe(map(({ data: { deleteAd } }) => deleteAd));
  }

  public createAd(ad: Partial<Ad>): Observable<Ad | null> {
    return from(
      API.graphql({
        query: gql`
          mutation CreateAd($input: CreateAdInput!) {
            createAd(input: $input) {
              id
            }
          }
        `,
        variables: {
          input: {
            ...ad,
          },
        },
      }) as Promise<{ data: { createAd: Ad | null } }>
    ).pipe(map(({ data: { createAd } }) => createAd));
  }

  public createPicture(adID: string, url: string): Observable<Picture | null> {
    return from(
      API.graphql({
        query: gql`
          mutation CreatePicture($input: CreatePictureInput!) {
            createPicture(input: $input) {
              id
            }
          }
        `,
        variables: {
          input: {
            adID,
            url,
          },
        },
      }) as Promise<{ data: { createPicture: Picture | null } }>
    ).pipe(map(({ data: { createPicture } }) => createPicture));
  }
}
