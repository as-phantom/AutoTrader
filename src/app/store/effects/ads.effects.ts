import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { API } from 'aws-amplify';
import gql from 'graphql-tag';
import { from, of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { Ad } from 'src/API';
import { environment } from 'src/environments/environment';
import * as AdsActions from '../actions/ads.actions';

@Injectable()
export class AdsEffects {
  loadAds$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdsActions.loadAdsAction),
      switchMap(({ payload: { limit, nextToken } }) =>
        from(
          API.graphql({
            query: gql`
              query ListAds($limit: Int, $nextToken: String) {
                listAds(limit: $limit, nextToken: $nextToken) {
                  items {
                    id
                    make
                    model
                    picture
                    createdAt
                  }
                  nextToken
                }
              }
            `,
            variables: {
              limit,
              nextToken,
            },
          }) as Promise<{ data: { listAds: { items: Ad[]; nextToken: string | null } } }>
        ).pipe(
          map(
            ({
              data: {
                listAds: { items: ads, nextToken },
              },
            }) => AdsActions.loadAdsSuccessAction({ payload: { ads, nextToken } })
          ),
          catchError((error: Error) => of(AdsActions.loadAdsErrorAction({ payload: { error } })))
        )
      )
    )
  );

  loadAdsSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdsActions.loadAdsSuccessAction),
      filter(({ payload: { nextToken } }) => Boolean(nextToken)),
      switchMap(({ payload: { nextToken } }) =>
        of(
          AdsActions.loadAdsAction({
            payload: { limit: environment.defaultAppSyncMaxPaginationLimit, nextToken },
          })
        )
      )
    )
  );

  constructor(private readonly actions$: Actions) {}
}
