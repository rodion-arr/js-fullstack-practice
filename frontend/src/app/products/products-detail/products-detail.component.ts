import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { GetActivatedProduct } from '../../store/actions';
import { Observable } from 'rxjs';
import { Product } from '../../core/model/product';
import { ProductsSelectors } from '../../store/services';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.sass']
})
export class ProductsDetailComponent implements OnInit {
  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    protected productsSelectors: ProductsSelectors
  ) {
    this.product$ = this.productsSelectors.activatedProduct$;
  }

  ngOnInit(): void {
    this.route.params
      .pipe(
        map(params => params.slug)
      )
      .subscribe(slug => {
        this.store.dispatch(new GetActivatedProduct(slug));
      });
  }

}
