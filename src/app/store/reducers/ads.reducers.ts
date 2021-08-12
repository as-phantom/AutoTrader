import { Action, createReducer, on } from '@ngrx/store';
import { Ad } from '../../../API';
import * as AdsActions from '../actions/ads.actions';

export interface AdsState {
  ads: Ad[] | undefined;
}

export const initialState: AdsState = { ads: undefined };

export const makesReducer = createReducer<AdsState>(
  initialState,
  on(AdsActions.loadAdsSuccessAction, (state, { payload: { ads } }) => {
    if (state.ads) {
      return {
        ...state,
        ads: [...state.ads, ...ads],
      };
    } else {
      return {
        ...state,
        ads,
      };
    }
  })
);

export function AdsReducer(state: AdsState | undefined, action: Action): AdsState {
  return makesReducer(state, action);
}

export const getAds = (state: AdsState) => state.ads;
