import { Action, createReducer, on } from '@ngrx/store';
import { Region } from '../../../API';
import * as RegionsActions from '../actions/regions.actions';

export interface RegionsState {
  regions: Region[] | undefined;
  loadingComplete: boolean | undefined;
}

export const initialState: RegionsState = { regions: undefined, loadingComplete: undefined };

export const regionsReducer = createReducer<RegionsState>(
  initialState,
  on(RegionsActions.loadRegionsSuccessAction, (state, { payload: { regions, nextToken } }) => {
    if (state.regions) {
      return {
        ...state,
        regions: [...state.regions, ...regions],
        loadingComplete: !nextToken,
      };
    } else {
      return {
        ...state,
        regions,
        loadingComplete: !nextToken,
      };
    }
  })
);

export function RegionsReducer(state: RegionsState | undefined, action: Action): RegionsState {
  return regionsReducer(state, action);
}

export const getRegions = (state: RegionsState) => state.regions;
export const getLoadingComplete = (state: RegionsState) => state.loadingComplete;
