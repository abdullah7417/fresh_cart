import { Component, computed, inject, OnInit, Signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { MyTranslateService } from '../../core/services/my-translate.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-nav-blanck',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './nav-blanck.component.html',
  styleUrl: './nav-blanck.component.scss',
})
export class NavBlanckComponent implements OnInit {
  //~~~~~~~~~~~~~~~~~~~~~~~~INJECTION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  readonly _AuthService = inject(AuthService);
  readonly _MyTranslateService = inject(MyTranslateService);
  readonly _TranslateService = inject(TranslateService);
  readonly _CartService = inject(CartService);

  //~~~~~~~~~~~~~~~~~~~PROPERTY~~~~~~~~~~~~~~~~~~~~~~~
  cartCount: Signal<number> = computed(() => this._CartService.cartNumber());
  //~~~~~~~~~~~~~~~~~CHANGE LANG~~~~~~~~~~~~~~~~~~~~~~~`
  change(lang: string): void {
    this._MyTranslateService.changeLang(lang);
  }

  ngOnInit(): void {
    this._CartService.getProductsCart().subscribe({
      next: (res) => {
        console.log(res);
        this._CartService.cartNumber.set(res.numOfCartItems);
      },
    });
  }
}
