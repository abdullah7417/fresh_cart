import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../core/services/order.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent implements OnInit {
  //~~~~~~~~~~~~~~~~~~INJECTION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  private readonly _OrderService = inject(OrderService);
  //~~~~~~~~~~~~~~~~~~CART ID~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  cartId: string | null = '';
  //~~~~~~~~~~~~~~~~~~FORM GROUP~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  orders: FormGroup = new FormGroup({
    details: new FormControl(null),
    phone: new FormControl(null),
    city: new FormControl(null),
  });
  //~~~~~~~~~~~~~~~~~~DETAILS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        this.cartId = params.get('id');
      },
    });
  }
  //~~~~~~~~~~~~~~~~~~CONFIRM ORDER~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ordersSubmit(): void {
    console.log(this.orders.value);
    this._OrderService.checkOut(this.cartId, this.orders.value).subscribe({
      next: (res) => {
        if (res.status == 'success') {
          window.open(res.session.url, '_self');
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
