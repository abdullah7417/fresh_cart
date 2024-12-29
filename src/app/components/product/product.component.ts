import { Component, inject, signal, WritableSignal } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { CartService } from '../../core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { TittlePipe } from '../../core/pipes/tittle.pipe';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { IProductList } from '../../core/interface/IProduct-list';
import { CategoriesService } from '../../core/services/categories.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    TittlePipe,
    CurrencyPipe,
    FormsModule,
    SearchPipe,
    RouterLink,
    TranslateModule,
    CarouselModule,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  private readonly _ProductsService = inject(ProductsService);
  private readonly _CartService = inject(CartService);
  private readonly _ToastrService = inject(ToastrService);
  private readonly _CategoriesService = inject(CategoriesService);

  producList: WritableSignal<IProductList[]> = signal([]);
  categoryList: WritableSignal<any[]> = signal([]);

  text: string = '';

  customOptionsCat: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay: true,
    rtl: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    pullDrag: false,
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
        items: 5,
      },
    },
    nav: false,
  };

  ngOnInit(): void {
    this._CategoriesService.setCategory().subscribe({
      next: (res) => {
        this.categoryList.set(res.data);
        console.log(res);
      },
    });

    this._ProductsService.setProduct().subscribe({
      next: (res) => {
        console.log(res.data);
        this.producList.set(res.data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

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
}
