import { Component, inject, signal, WritableSignal } from '@angular/core';
import { CategoriesService } from '../../core/services/categories.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { TranslateModule } from '@ngx-translate/core';
import { TittlePipe } from '../../core/pipes/tittle.pipe';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../../core/pipes/search.pipe';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CarouselModule, TranslateModule, FormsModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
  private readonly _CategoriesService = inject(CategoriesService);

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
  }
}
