import { Action } from '@ngrx/store';

import { DataAction, DataErrorAction } from './data.actions';
import { Product } from '../../core/model/product';

export const GET_PRODUCTS_LIST = '[Products] GET_PRODUCTS_LIST';
export const GET_PRODUCTS_SUCCESS = '[Products] GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_ERROR = '[Products] GET_PRODUCTS_ERROR';

export const GET_ACTIVATED_PRODUCT = '[Products] GET_ACTIVATED_PRODUCT';
export const GET_ACTIVATED_PRODUCT_SUCCESS = '[Products] GET_ACTIVATED_PRODUCT_SUCCESS';
export const GET_ACTIVATED_PRODUCT_ERROR = '[Products] GET_ACTIVATED_PRODUCT_ERROR';
export const ACTIVATED_PRODUCT_RESET = '[Products] ACTIVATED_PRODUCT_RESET';

export abstract class ProductAction implements DataAction<Product> {
  readonly type: string;
  constructor(public readonly payload: Product) {}
}

export class GetProductsList implements Action {
  readonly type = GET_PRODUCTS_LIST;
}

export class GetProductsSuccess implements Action {
  readonly type = GET_PRODUCTS_SUCCESS;
  constructor(public readonly payload: Product[]) {}
}

export class GetProductsError implements Action {
  readonly type = GET_PRODUCTS_ERROR;
  constructor(public readonly payload: any) {}
}

export class GetActivatedProduct implements Action {
  readonly type = GET_ACTIVATED_PRODUCT;
  constructor(public readonly payload: string) {}
}

export class GetActivatedProductSuccess implements Action {
  readonly type = GET_ACTIVATED_PRODUCT_SUCCESS;
  constructor(public readonly payload: Product) {}
}

export class GetActivatedProductError implements Action {
  readonly type = GET_ACTIVATED_PRODUCT_ERROR;
  constructor(public readonly payload: any) {}
}

export class ActivatedProductReset implements Action {
  readonly type = ACTIVATED_PRODUCT_RESET;
}

export type AllProductsActions =
  | GetProductsList
  | GetProductsSuccess
  | GetProductsError
  | GetActivatedProduct
  | GetActivatedProductSuccess
  | GetActivatedProductError
  | ActivatedProductReset;
