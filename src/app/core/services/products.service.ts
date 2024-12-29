import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  //~~~~~~~~~~~~~~~~~~~~~~INJECTIONS~~~~~~~~~~~~~~~~~
  private readonly _HttpClient = inject(HttpClient);

  //~~~~~~~~~~~~~~~~~~~~~PRODUCTS API~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  setProduct(): Observable<any> {
    return this._HttpClient.get(`${environment.BaseUrl}/api/v1/products`);
  }

  //~~~~~~~~~~~~~~~~~~~~~SPECIFIC PRODUCTS API~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  setSpecificProduct(id: string | null): Observable<any> {
    return this._HttpClient.get(`${environment.BaseUrl}/api/v1/products/${id}`);
  }
}
