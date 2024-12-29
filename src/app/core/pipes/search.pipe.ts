import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(arr: any[], term: string): any[] {
    return arr.filter((item) =>
      item.title.toLowerCase().includes(term.toLowerCase()),
    );
  }
}