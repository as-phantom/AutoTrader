import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromRegions from './regions.reducers';
import * as fromAuth from './auth.reducers';
import * as fromAds from './ads.reducers';

export interface State {
  regions: fromRegions.RegionsState;
  auth: fromAuth.AuthState;
  ads: fromAds.AdsState;
}

export const reducers: ActionReducerMap<State> = {
  regions: fromRegions.RegionsReducer,
  auth: fromAuth.AuthReducer,
  ads: fromAds.AdsReducer,
};

const getAuthState = (state: State) => state.auth;
export const getCurrentAuthenticatedUser = createSelector(getAuthState, fromAuth.getCurrentAuthenticatedUser);
export const getRedirectUrl = createSelector(getAuthState, fromAuth.getRedirectUrl);
export const getUser = createSelector(getAuthState, fromAuth.getUser);

const getRegionsState = (state: State) => state.regions;
export const getRegions = createSelector(getRegionsState, fromRegions.getRegions);

const getAdsState = (state: State) => state.ads;
export const getAds = createSelector(getAdsState, fromAds.getAds);
