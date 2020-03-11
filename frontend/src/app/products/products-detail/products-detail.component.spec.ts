import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDetailComponent } from './products-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';

describe('ProductsDetailComponent', () => {
  let component: ProductsDetailComponent;
  let fixture: ComponentFixture<ProductsDetailComponent>;
  let store: MockStore<any>;
  const initialState = {
    entityCache: {
      app: {
        pageSubtitle: ''
      },
      products: [],
      activatedProduct: {
        fullTitle: 'test',
        detailImage: 'test',
        shortTitle: 'test',
        price: '1',
        slogan: '1',
      }
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ ProductsDetailComponent ],
      providers: [
        provideMockStore({initialState})
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.get<Store>(Store);
  });

  it('should create', () => {
    store.setState(initialState);
    expect(component).toBeTruthy();
  });

  it('should print html from API', () => {
    store.setState(initialState);
    component.product = {
      isActive: true,
      sort: 500,
      shortTitle: 'Viva',
      fullTitle: 'Zinzino Viva',
      detailSubtitle: null,
      previewImage: '/assets/img/products/viva-all.jpg',
      detailImage: '/assets/img/products/viva.jpg',
      detailImageSecondary: null,
      detailText: '<strong>html text</strong>',
      slug: 'viva',
      slogan: 'test',
      presentationLink: null,
      price: '19',
      seoDescription: null,
      youtubeLink: null
    };
    expect(component.getDetailTextHtml().toString()).toContain('<strong>html text</strong>');
  });
});
