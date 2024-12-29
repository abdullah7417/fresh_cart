import {
  Component,
  inject,
  OnDestroy,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { IProductList } from '../../core/interface/IProduct-list';
import { Subscription } from 'rxjs';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CategoriesService } from '../../core/services/categories.service';
import { Router, RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { TittlePipe } from '../../core/pipes/tittle.pipe';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { CartService } from '../../core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CarouselModule,
    RouterLink,
    FormsModule,
    TittlePipe,
    CurrencyPipe,
    SearchPipe,
    TranslateModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  //~~~~~~~~~~~~~~~~~~~INJECTIONS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  private readonly _ProductsService = inject(ProductsService);
  private readonly _CategoriesService = inject(CategoriesService);
  private readonly _CartService = inject(CartService);
  private readonly _ToastrService = inject(ToastrService);

  //~~~~~~~~~~~~~~~~~~~~~~~~~OBJECTS~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  producList: WritableSignal<IProductList[]> = signal([]);
  categoryList: WritableSignal<any[]> = signal([]);

  text: string = '';

  // private readonly _Router = inject(Router);

  // setDetails(id:string): void {
  //   this._Router.navigate(['/details' , id]);
  // }

  homeSub!: Subscription;
  //~~~~~~~~~~~~~~~~~~~~~START SLIDERS~~~~~~~~~~~~~~~~~~~
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

  customOptionsMain: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    autoplay: true,
    rtl: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    nav: true,
  };
  //~~~~~~~~~~~~~~~~~~~~~END SLIDERS~~~~~~~~~~~~~~~~~~~

  //~~~~~~~~~~~~~~~~~~~~~START API LOGIC~~~~~~~~~~~~~~~~~~~
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
  //~~~~~~~~~~~~~~~~~~~~~END API LOGIC~~~~~~~~~~~~~~~~~~~

  //~~~~~~~~~~~~~~~~~~~~~UNSUBSCRIBE~~~~~~~~~~~~~~~~~~~

  ngOnDestroy(): void {
    this.homeSub?.unsubscribe;
  }

  //~~~~~~~~~~~~~~~~~~~~~~~~CART LOGIC~~~~~~~~~~~~~~~~~~~~~~~~~~
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
