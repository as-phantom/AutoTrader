import { Action, createReducer, on } from '@ngrx/store';
import { Ad } from '../../../API';
import * as AdsActions from '../actions/ads.actions';

export interface AdsState {
  ads: Ad[] | undefined;
  loadingComplete: boolean | undefined;
}

export const initialState: AdsState = { ads: undefined, loadingComplete: undefined };

export const makesReducer = createReducer<AdsState>(
  initialState,
  on(AdsActions.loadAdsSuccessAction, (state, { payload: { ads, nextToken } }) => {
    if (state.ads) {
      return {
        ...state,
        ads: [...state.ads, ...ads],
        loadingComplete: !nextToken,
      };
    } else {
      return {
        ...state,
        ads,
        loadingComplete: !nextToken,
      };
    }
  })
);

export function AdsReducer(state: AdsState | undefined, action: Action): AdsState {
  return makesReducer(state, action);
}

export const getAds = (state: AdsState) => state.ads;
export const getLoadingComplete = (state: AdsState) => state.loadingComplete;
