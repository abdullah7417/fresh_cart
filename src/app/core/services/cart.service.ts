import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  //~~~~~~~~~~~~~~~~~~INJECTION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  private readonly _HttpClient = inject(HttpClient);

  //~~~~~~~~~~~~~~~~~~~~PROPERTY~~~~~~~~~~~~~~~~~~~~~~~~~~
  cartNumber: WritableSignal<number> = signal(0);
  //~~~~~~~~~~~~~~~ADD TO CART~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  addToCart(id: string): Observable<any> {
    return this._HttpClient.post(`${environment.BaseUrl}/api/v1/cart`, {
      productId: id,
    });
  }
  //~~~~~~~~~~~~~~~ADD TO CART~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  getProductsCart(): Observable<any> {
    return this._HttpClient.get(`${environment.BaseUrl}/api/v1/cart`);
  }
  //~~~~~~~~~~~~~~~DELETE FROM CART~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  deleteItemCart(id: string): Observable<any> {
    return this._HttpClient.delete(`${environment.BaseUrl}/api/v1/cart/${id}`);
  }
  //~~~~~~~~~~~~~~~UPDATE CART~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  updateProductQuantity(id: string, newCount: number): Observable<any> {
    return this._HttpClient.put(`${environment.BaseUrl}/api/v1/cart/${id}`, {
      count: newCount,
    });
  }
  //~~~~~~~~~~~~~~~CLEAR CART~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  clearCart(): Observable<any> {
    return this._HttpClient.delete(`${environment.BaseUrl}/api/v1/cart`);
  }
}
