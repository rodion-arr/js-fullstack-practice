import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngrx/store';

import { ProductsListComponent } from './products-list.component';

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;
  let store: MockStore<any>;
  const initialState = {
    entityCache: {
      app: {
        pageSubtitle: ''
      },
      products: []
    }
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsListComponent ],
      imports: [
        MatIconModule
      ],
      providers: [
        provideMockStore({initialState})
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    store = TestBed.get<Store>(Store);
  });

  it('should create', () => {
    store.setState(initialState);
    expect(component).toBeTruthy();
  });

  it('should have correct ngOnDestroy()', () => {
    store.setState(initialState);
    expect(component.ngOnDestroy()).toBeUndefined();
  });
});
