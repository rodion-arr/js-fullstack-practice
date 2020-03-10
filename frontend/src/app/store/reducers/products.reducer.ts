import * as ProductActions from '../actions';
import { Product } from '../../core/model/product';

export interface ProductsState {
  productsList: Product[];
  activatedProduct: Product;
}

export const initialState: ProductsState = {
  productsList: [],
  activatedProduct: null
};

export function reducer(
  state = initialState,
  action: ProductActions.AllProductsActions
): ProductsState {
    switch (action.type) {
      case ProductActions.GET_PRODUCTS_SUCCESS: {
        return {...state, productsList: action.payload};
        break;
      }
      case ProductActions.GET_ACTIVATED_PRODUCT_SUCCESS: {
        return { ...state, activatedProduct: action.payload };
        break;
      }
      case ProductActions.ACTIVATED_PRODUCT_RESET: {
        return { ...state, activatedProduct: null };
        break;
      }
    }
    return state;
}
