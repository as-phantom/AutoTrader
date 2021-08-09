import { createAction, props } from '@ngrx/store';
import { Region } from '../../../API';

export const LOAD_REGIONS = '[REGIONS] LOAD_REGIONS';
export const LOAD_REGIONS_SUCCESS = '[REGIONS] LOAD_REGIONS_SUCCESS';
export const LOAD_REGIONS_ERROR = '[REGIONS] LOAD_REGIONS_ERROR';

export const loadRegionsAction = createAction(LOAD_REGIONS);
export const loadRegionsSuccessAction = createAction(LOAD_REGIONS_SUCCESS, props<{ payload: { regions: Region[] } }>());
export const loadRegionsErrorAction = createAction(LOAD_REGIONS_ERROR, props<{ payload: { error: Error } }>());
