import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { Product } from '../../core/model/product';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { DataServiceError } from './data-error.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {
  apiUrlBase = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<any>(`${this.apiUrlBase}/products`)
      .pipe(
        map(response => {
          if (response.status) {
            return response.data.products as Product[];
          } else {
            throw new Error(response.message);
          }
        }),
        catchError(this.handleError())
      );
  }

  private handleError<T>(requestData?: T) {
    return (res: HttpErrorResponse) => {
      const error = new DataServiceError(res.error, requestData);
      console.error(error);
      return throwError(error);
    };
  }
}
