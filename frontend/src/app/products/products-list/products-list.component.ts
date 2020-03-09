import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { GetProductsList, ResetPageSubtitle, SetPageSubtitle } from '../../store/actions';
import { Product } from '../../core/model/product';
import { ProductsSelectors } from '../../store';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass']
})
export class ProductsListComponent implements OnInit, OnDestroy {
  products$: Observable<Product[]>;

  constructor(private store: Store, protected productsSelectors: ProductsSelectors) {
    this.products$ = this.productsSelectors.productsList$;
  }

  ngOnInit() {
    this.store.dispatch(new SetPageSubtitle('Zinzino Products'));
    this.store.dispatch(new GetProductsList());
  }

  ngOnDestroy(): void {
    this.store.dispatch(new ResetPageSubtitle());
  }

}
