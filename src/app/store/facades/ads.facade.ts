import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AdsActions from '../actions/ads.actions';
import * as fromRoot from '../reducers';

@Injectable({
  providedIn: 'root',
})
export class AdsFacade {
  public readonly ads$ = this.store.select(fromRoot.getAds);

  constructor(private readonly store: Store<fromRoot.State>) {}

  public loadAds(limit: number, nextToken: string | null): void {
    this.store.dispatch(AdsActions.loadAdsAction({ payload: { limit, nextToken } }));
  }
}
