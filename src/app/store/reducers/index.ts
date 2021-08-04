import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromAuth from './auth.reducers';

export interface State {
  auth: fromAuth.AuthState;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.AuthReducer,
};

const getAuthState = (state: State) => state.auth;

export const getCurrentAuthenticatedUser = createSelector(getAuthState, fromAuth.getCurrentAuthenticatedUser);
export const getRedirectUrl = createSelector(getAuthState, fromAuth.getRedirectUrl);
export const getUser = createSelector(getAuthState, fromAuth.getUser);
