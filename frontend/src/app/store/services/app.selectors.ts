import { Injectable } from '@angular/core';
import { Store, createSelector, createFeatureSelector, select } from '@ngrx/store';

import { EntityState } from '../reducers';
import { AppState } from '../reducers/app.reducer';

const getEntityState = createFeatureSelector<EntityState>('entityCache');

const getAppState = createSelector(
  getEntityState,
  (state: EntityState) => state.app
);

const getPageSubtitle = createSelector(
  getAppState,
  (state: AppState) => state.pageSubtitle
);

@Injectable()
export class AppSelectors {

  constructor(private store: Store<EntityState>) {}

  appState$ = this.store.pipe(select(getAppState));
  pageSubtitle$ = this.store.pipe(select(getPageSubtitle));

}
