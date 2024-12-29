import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tittle',
  standalone: true,
})
export class TittlePipe implements PipeTransform {
  transform(text: string, limit: number): string {
    return text.split(' ', limit).join('');
  }
}
