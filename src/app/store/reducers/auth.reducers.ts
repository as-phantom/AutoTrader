import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../../../API';
import * as AuthActions from '../actions/auth.actions';

export interface AuthState {
  currentAuthenticatedUser: any | undefined;
  redirectUrl: string | null | undefined;
  user: User | undefined;
}

const REDIRECT_URL_SESSION_STORAGE_KEY: string = 'redirectUrl';

export const initialState: AuthState = {
  currentAuthenticatedUser: undefined,
  redirectUrl: sessionStorage.getItem(REDIRECT_URL_SESSION_STORAGE_KEY),
  user: undefined,
};

export const authReducer = createReducer<AuthState>(
  initialState,
  on(AuthActions.setCurrentAuthenticatedUserAction, (state, { payload: { currentAuthenticatedUser } }) => {
    return {
      ...state,
      currentAuthenticatedUser,
    };
  }),
  on(AuthActions.setRedirectUrlAction, (state, { payload: { redirectUrl } }) => {
    if (redirectUrl) {
      sessionStorage.setItem(REDIRECT_URL_SESSION_STORAGE_KEY, redirectUrl);
    } else {
      sessionStorage.removeItem(REDIRECT_URL_SESSION_STORAGE_KEY);
    }

    return {
      ...state,
      redirectUrl,
    };
  }),
  on(AuthActions.setUserAction, (state, { payload: { user } }) => {
    return {
      ...state,
      user,
    };
  })
);

export function AuthReducer(state: AuthState | undefined, action: Action): AuthState {
  return authReducer(state, action);
}

export const getCurrentAuthenticatedUser = (state: AuthState) => state.currentAuthenticatedUser;
export const getRedirectUrl = (state: AuthState) => state.redirectUrl;
export const getUser = (state: AuthState) => state.user;
