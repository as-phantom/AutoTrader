import { createAction, props } from '@ngrx/store';
import { Ad } from 'src/API';

export const LOAD_ADS = '[ADS] LOAD_ADS';
export const LOAD_ADS_SUCCESS = '[ADS] LOAD_ADS_SUCCESS';
export const LOAD_ADS_ERROR = '[ADS] LOAD_ADS_ERROR';

export const loadAdsAction = createAction(
  LOAD_ADS,
  props<{ payload: { limit: number; nextToken: string | null } }>()
);
export const loadAdsSuccessAction = createAction(
  LOAD_ADS_SUCCESS,
  props<{ payload: { ads: Ad[]; nextToken: string | null } }>()
);
export const loadAdsErrorAction = createAction(
   LOAD_ADS_ERROR,
   props<{ payload: { error: Error } }>()
 );