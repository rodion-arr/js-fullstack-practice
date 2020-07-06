import { reducer } from './products.reducer';
import { ActivatedProductReset, GetActivatedProductSuccess, GetProductsList, GetProductsSuccess } from '../actions';
import { Product } from '../../core/model/product';

describe('products reducer test', () => {
  const initialState = {
    productsList: [],
    activatedProduct: null
  };

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

  it('should handle get products success action', () => {
    const reducerResult = reducer(initialState, new GetProductsSuccess([product]));

    expect(reducerResult).toEqual({...initialState, productsList: [product]});
  });

  it('should handle get activated products success action', () => {
    const reducerResult = reducer(initialState, new GetActivatedProductSuccess(product));

    expect(reducerResult).toEqual({...initialState, activatedProduct: product});
  });

  it('should handle activated products reset action', () => {
    const reducerResult = reducer(initialState, new ActivatedProductReset());

    expect(reducerResult).toEqual(initialState);
  });

  it('should handle unknown action without modifications', () => {
    const action = new GetProductsList();
    // @ts-ignore
    action.type = 'unknown';

    const reducerResult = reducer(initialState, action);

    expect(reducerResult).toEqual(initialState);
  });
});
