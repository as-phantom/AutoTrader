import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { API } from 'aws-amplify';
import gql from 'graphql-tag';
import { from, of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { Region } from 'src/API';
import { environment } from 'src/environments/environment';
import * as RegionsActions from '../actions/regions.actions';

@Injectable()
export class RegionsEffects {
  loadRegions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegionsActions.loadRegionsAction),
      switchMap(({ payload: { limit, nextToken } }) =>
        from(
          API.graphql({
            query: gql`
              query ListRegions($limit: Int, $nextToken: String) {
                listRegions(limit: $limit, nextToken: $nextToken) {
                  items {
                    id
                    name
                  }
                  nextToken
                }
              }
            `,
            variables: {
              limit,
              nextToken,
            },
          }) as Promise<{ data: { listRegions: { items: Region[]; nextToken: string | null } } }>
        ).pipe(
          map(
            ({
              data: {
                listRegions: { items: regions, nextToken },
              },
            }) => RegionsActions.loadRegionsSuccessAction({ payload: { regions, nextToken } })
          ),
          catchError((error: Error) => of(RegionsActions.loadRegionsErrorAction({ payload: { error } })))
        )
      )
    )
  );

  loadRegionsSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegionsActions.loadRegionsSuccessAction),
      filter(({ payload: { nextToken } }) => Boolean(nextToken)),
      switchMap(({ payload: { nextToken } }) =>
        of(
          RegionsActions.loadRegionsAction({
            payload: { limit: environment.defaultAppSyncMaxPaginationLimit, nextToken },
          })
        )
      )
    )
  );

  constructor(private readonly actions$: Actions) {}
}
