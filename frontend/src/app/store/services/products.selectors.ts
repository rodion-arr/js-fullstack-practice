import { Injectable } from '@angular/core';
import { Store, createSelector, createFeatureSelector, select } from '@ngrx/store';

import { EntityState } from '../reducers';
import { ProductsState } from '../reducers/products.reducer';

const getEntityState = createFeatureSelector<EntityState>('entityCache');

const getProductsState = createSelector(
  getEntityState,
  (state: EntityState) => state.products
);

const getProductsList = createSelector(
  getProductsState,
  (state: ProductsState) => state.productsList
);

const getActivatedProduct = createSelector(
  getProductsState,
  (state: ProductsState) => state.activatedProduct
);

@Injectable({
  providedIn: 'root'
})
export class ProductsSelectors {

  constructor(private store: Store<EntityState>) {}

  productsState$ = this.store.pipe(select(getProductsState));
  productsList$ = this.store.pipe(select(getProductsList));
  activatedProduct$ = this.store.pipe(select(getActivatedProduct));

}
