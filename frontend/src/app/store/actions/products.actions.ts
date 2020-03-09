import { Action } from '@ngrx/store';

import { DataAction, DataErrorAction } from './data.actions';
import { Product } from '../../core/model/product';

export const GET_PRODUCTS_LIST = '[Products] GET_PRODUCTS_LIST';
export const GET_PRODUCTS_SUCCESS = '[Products] GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_ERROR = '[Products] GET_PRODUCTS_ERROR';

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

export type AllProductsActions =
  | GetProductsList
  | GetProductsSuccess
  | GetProductsError;
