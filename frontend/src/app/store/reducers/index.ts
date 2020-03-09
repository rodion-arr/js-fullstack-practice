import { ActionReducerMap } from '@ngrx/store';
import * as appReducers from './app.reducer';
import * as prductsReducers from './products.reducer';

export interface EntityState {
  app: appReducers.AppState;
  products: prductsReducers.ProductsState;
}

export const reducers: ActionReducerMap<EntityState> = {
  app: appReducers.reducer,
  products: prductsReducers.reducer
};
