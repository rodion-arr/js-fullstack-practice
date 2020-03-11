import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { GetActivatedProduct, ResetPageSubtitle, SetPageSubtitle } from '../../store/actions';
import { Product } from '../../core/model/product';
import { ProductsSelectors } from '../../store';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.sass']
})
export class ProductsDetailComponent implements OnInit, OnDestroy {
  product: Product;
  productSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private productsSelectors: ProductsSelectors,
    private sanitizer: DomSanitizer
  ) {
    this.productSubscription = this.productsSelectors.activatedProduct$
      .subscribe((product: Product) => {
        this.product = product;
        this.store.dispatch(new SetPageSubtitle(product?.fullTitle));
      });
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

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
    this.store.dispatch(new ResetPageSubtitle());
  }

  getDetailTextHtml(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.product.detailText);
  }

}
