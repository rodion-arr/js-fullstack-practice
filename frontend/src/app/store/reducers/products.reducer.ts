import * as ProductActions from '../actions';
import { Product } from '../../core/model/product';

export interface ProductsState {
  productsList: Product[];
}

export const initialState: ProductsState = {
  productsList: []
};

export function reducer(
  state = initialState,
  action: ProductActions.AllProductsActions
): ProductsState {
    switch (action.type) {
      case ProductActions.GET_PRODUCTS_SUCCESS:
        return { ...state, productsList: action.payload };
        break;
    }
    return state;
}
