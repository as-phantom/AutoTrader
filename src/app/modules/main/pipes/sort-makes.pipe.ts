import { Pipe, PipeTransform } from '@angular/core';
import { Ad } from 'src/API';

@Pipe({
  name: 'sortMakes',
})
export class SortMakesPipe implements PipeTransform {
  transform(ads: Ad[] | null | undefined): string[] {
    if (!ads) {
      return [];
    }

    return Array.from(new Set(ads.map((ad) => ad.make))).sort((a, b) => a.localeCompare(b));
  }
}
