import { isPlatformBrowser } from '@angular/common';
import {
  inject,
  Injectable,
  PLATFORM_ID,
  RendererFactory2,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class MyTranslateService {
  //~~~~~~~~~~~~~~~~~~~~~~INJECTION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  private readonly _TranslateService = inject(TranslateService);
  private readonly _plateId = inject(PLATFORM_ID);
  private readonly _Renderrer2 = inject(RendererFactory2).createRenderer(
    null,
    null,
  );

  constructor() {
    if (isPlatformBrowser(this._plateId)) {
      this._TranslateService.setDefaultLang('en');
      this.setLang();
    }
  }
  //~~~~~~~~~~~~~~~~~~~~~~~CHANGE LANG & DIR~~~~~~~~~~~~~~~~~~~~~~
  setLang(): void {
    let savedLang = localStorage.getItem('lang');
    if (savedLang !== null) {
      this._TranslateService.use(savedLang!);
    }

    if (savedLang === 'en') {
      this._Renderrer2.setAttribute(document.documentElement, 'dir', 'ltr');
      this._Renderrer2.setAttribute(document.documentElement, 'lang', 'en');
    } else if (savedLang === 'ar') {
      this._Renderrer2.setAttribute(document.documentElement, 'dir', 'rtl');
      this._Renderrer2.setAttribute(document.documentElement, 'lang', 'ar');
    }
  }
  //~~~~~~~~~~~~~~~~~~~~~~SET LANG~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  changeLang(lang: string): void {
    if (isPlatformBrowser(this._plateId)) {
      localStorage.setItem('lang', lang);
      this.setLang();
    }
  }
}
