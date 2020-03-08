import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ResetPageSubtitle, SetPageSubtitle } from '../../store/actions';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass']
})
export class ProductsListComponent implements OnInit, OnDestroy {

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new SetPageSubtitle('Zinzino Products'));
  }

  ngOnDestroy(): void {
    this.store.dispatch(new ResetPageSubtitle());
  }

}
