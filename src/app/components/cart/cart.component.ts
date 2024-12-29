import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { Icart } from '../../core/interface/icart';
import { CurrencyPipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  //~~~~~~~~~~~~~~~~~~INJECTION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  private readonly _CartService = inject(CartService);
  private readonly _ToastrService = inject(ToastrService);
  //~~~~~~~~~~~~~~~~~~CART LIST~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  cartDetails: Icart = {} as Icart;
  //~~~~~~~~~~~~~~~~~~SHOW CART PRODUCTS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ngOnInit(): void {
    this._CartService.getProductsCart().subscribe({
      next: (res) => {
        console.log(res.data);
        this.cartDetails = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  //~~~~~~~~~~~~~~~~~~REMOV ITEM FROM CART~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  removItem(id: string): void {
    this._CartService.deleteItemCart(id).subscribe({
      next: (res) => {
        console.log(res);
        this.cartDetails = res.data;
        this._CartService.cartNumber.set(res.numOfCartItems);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  //~~~~~~~~~~~~~~~~~~UPDATE CART PRODUCTS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  updateCart(id: string, count: number): void {
    this._CartService.updateProductQuantity(id, count).subscribe({
      next: (res) => {
        console.log(res);
        this.cartDetails = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  //~~~~~~~~~~~~~~~~~~CLEAR CART~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  clearCart(): void {
    this._CartService.clearCart().subscribe({
      next: (res) => {
        console.log(res);
        if (res.message == 'success') {
          this.cartDetails = {} as Icart;
          this._CartService.cartNumber.set(0);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
