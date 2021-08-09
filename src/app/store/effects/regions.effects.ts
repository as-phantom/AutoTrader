import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { API } from 'aws-amplify';
import gql from 'graphql-tag';
import { from, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Region } from 'src/API';
import * as RegionsActions from '../actions/regions.actions';

@Injectable()
export class RegionsEffects {
  loadRegions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegionsActions.loadRegionsAction),
      switchMap(() =>
        from(
          API.graphql({
            query: gql`
              query ListRegions {
                listRegions {
                  items {
                    id
                    name
                  }
                }
              }
            `,
            variables: {},
          }) as Promise<{ data: { listRegions: { items: Region[] } } }>
        ).pipe(
          map(
            ({
              data: {
                listRegions: { items: regions },
              },
            }) => RegionsActions.loadRegionsSuccessAction({ payload: { regions } })
          ),
          catchError((error: Error) => of(RegionsActions.loadRegionsErrorAction({ payload: { error } })))
        )
      )
    )
  );

  constructor(private readonly actions$: Actions) {}
}
