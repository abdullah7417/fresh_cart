import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../core/services/products.service';
import { IProductList } from '../../core/interface/IProduct-list';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';
import { CartService } from '../../core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CarouselModule, TranslateModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  //~~~~~~~~~~~~~~~~~~~~INJECTIONS~~~~~~~~~~~~~~~~~~~~~~~~~~~
  private readonly _ActivatedRoute = inject(ActivatedRoute);
  private readonly _ProductsService = inject(ProductsService);
  private readonly _CartService = inject(CartService);
  private readonly _ToastrService = inject(ToastrService);

  //~~~~~~~~~~~~~~~~~~OBJECT~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  detailsProduct: IProductList | null = null;
  detailsSub!: Subscription;
  //~~~~~~~~~~~~~~~~~~~~~~~~~SLIDER~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  customOptionsDetails: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    rtl: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: false,
  };
  //~~~~~~~~~~~~~~~~~~~~~~~~~~LOGIC API ~~~~~~~~~~~~~~~~~~~~~~~~~~
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (p) => {
        let idproduct = p.get('product-id');

        this._ProductsService.setSpecificProduct(idproduct).subscribe({
          next: (res) => {
            console.log(res.data);
            this.detailsSub = this.detailsProduct = res.data;
          },
          error: (err) => {
            console.log(err);
          },
        });
      },
    });
  }

  //~~~~~~~~~~~~~ADD TO CART~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  addCart(id: string): void {
    this._CartService.addToCart(id).subscribe({
      next: (res) => {
        console.log(res);
        this._ToastrService.success(res.message, 'Frech Cart');
        this._CartService.cartNumber.set(res.numOfCartItems);
        console.log(this._CartService.cartNumber);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  //~~~~~~~~~~~~~~~~~~~~unsubscribe~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ngOnDestroy(): void {
    this.detailsSub?.unsubscribe;
  }
}
