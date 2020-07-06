import {
  ActivatedProductReset,
  GetActivatedProductError,
  GetActivatedProductSuccess, GetProductsError,
  GetProductsList,
  GetProductsSuccess
} from './products.actions';
import { Product } from '../../core/model/product';

describe('products actions', () => {
  const product: Product = {
    detailImage: '',
    detailImageSecondary: undefined,
    detailSubtitle: undefined,
    detailText: '',
    fullTitle: '',
    isActive: false,
    presentationLink: undefined,
    previewImage: '',
    price: undefined,
    seoDescription: undefined,
    shortTitle: '',
    slogan: '',
    slug: '',
    sort: 0,
    youtubeLink: undefined
  };

  it('should have GetProductsList action', () => {
    expect((new GetProductsList()).type).toBe('[Products] GET_PRODUCTS_LIST');
  });

  it('should have GetProductsSuccess action', () => {
    expect((new GetProductsSuccess([product])).type).toBe('[Products] GET_PRODUCTS_SUCCESS');
  });

  it('should have GetActivatedProductSuccess action', () => {
    expect((new GetActivatedProductSuccess(product)).type).toBe('[Products] GET_ACTIVATED_PRODUCT_SUCCESS');
  });

  it('should have GetActivatedProductError action', () => {
    expect((new GetActivatedProductError({})).type).toBe('[Products] GET_ACTIVATED_PRODUCT_ERROR');
  });

  it('should have ActivatedProductReset action', () => {
    expect((new ActivatedProductReset()).type).toBe('[Products] ACTIVATED_PRODUCT_RESET');
  });

  it('should have GetProductsError action', () => {
    expect((new GetProductsError({})).type).toBe('[Products] GET_PRODUCTS_ERROR');
  });
});
