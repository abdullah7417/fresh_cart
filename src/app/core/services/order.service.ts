import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  //~~~~~~~~~~~~~~~~~~INJECTION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  constructor(private _HttpClient: HttpClient) {}
  //~~~~~~~~~~~~~~~CHECK OUT~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  checkOut(idCart: string | null, cartDetails: object): Observable<any> {
    return this._HttpClient.post(
      `${environment.BaseUrl}/api/v1/orders/checkout-session/${idCart}?url=${environment.serverUrl}`,
      {
        shippingAddress: cartDetails,
      },
    );
  }
}
