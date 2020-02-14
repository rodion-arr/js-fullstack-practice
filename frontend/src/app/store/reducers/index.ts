import { ActionReducerMap } from '@ngrx/store';
import * as appReducers from './app.reducer';

export interface EntityState {
  app: appReducers.AppState;
}

export const reducers: ActionReducerMap<EntityState> = {
  app: appReducers.reducer
};
