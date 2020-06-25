import { GetProductsList, GetProductsSuccess } from './products.actions';
import { Product } from '../../core/model/product';

describe('products actions', () => {
  it('should have GetProductsList action', () => {
    expect((new GetProductsList()).type).toBe('[Products] GET_PRODUCTS_LIST');
  });

  it('should have GetProductsSuccess action', () => {
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
    expect((new GetProductsSuccess([product])).type).toBe('[Products] GET_PRODUCTS_SUCCESS');
  });
});
