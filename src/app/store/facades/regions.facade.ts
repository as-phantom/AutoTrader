import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as RegionsActions from '../actions/regions.actions';
import * as fromRoot from '../reducers';

@Injectable({
  providedIn: 'root',
})
export class RegionsFacade {
  public readonly regions$ = this.store.select(fromRoot.getRegions);

  constructor(private readonly store: Store<fromRoot.State>) {}

  public loadRegions(): void {
    this.store.dispatch(RegionsActions.loadRegionsAction());
  }
}
