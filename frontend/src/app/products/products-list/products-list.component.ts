import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { ResetPageSubtitle, SetPageSubtitle } from '../../store/actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass']
})
export class ProductsListComponent implements OnInit, OnDestroy {

  productList$: Observable<any> = this.http.get(`${environment.apiUrl}/products`);

  constructor(private store: Store, private http: HttpClient) { }

  ngOnInit() {
    this.store.dispatch(new SetPageSubtitle('Zinzino Products'));
  }

  ngOnDestroy(): void {
    this.store.dispatch(new ResetPageSubtitle());
  }

}
