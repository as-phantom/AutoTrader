import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromAuth from './auth.reducers';
import * as fromRegions from './regions.reducers';

export interface State {
  auth: fromAuth.AuthState;
  regions: fromRegions.RegionsState;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.AuthReducer,
  regions: fromRegions.RegionsReducer,
};

const getAuthState = (state: State) => state.auth;

export const getCurrentAuthenticatedUser = createSelector(getAuthState, fromAuth.getCurrentAuthenticatedUser);
export const getRedirectUrl = createSelector(getAuthState, fromAuth.getRedirectUrl);
export const getUser = createSelector(getAuthState, fromAuth.getUser);

const getRegionsState = (state: State) => state.regions;

export const getRegions = createSelector(getRegionsState, fromRegions.getRegions);
