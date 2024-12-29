import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  //~~~~~~~~~~~~~~~~~~~~~~INJECTIONS~~~~~~~~~~~~~~~~~
  private readonly _HttpClient = inject(HttpClient);
  //~~~~~~~~~~~~~~~~~~~~~CategorIES API~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  setCategory(): Observable<any> {
    return this._HttpClient.get(`${environment.BaseUrl}/api/v1/categories`);
  }
  //~~~~~~~~~~~~~~~~~~~~~SUBCategorIES API~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  setSpecificCategory(): Observable<any> {
    return this._HttpClient.get(
      `${environment.BaseUrl}/api/v1/categories/6407ebf65bbc6e43516931ec`,
    );
  }
}
