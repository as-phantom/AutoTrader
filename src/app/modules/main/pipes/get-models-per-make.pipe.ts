import { Pipe, PipeTransform } from '@angular/core';
import { Ad } from 'src/API';

@Pipe({
  name: 'getModelsPerMake',
})
export class GetModelsPerMakePipe implements PipeTransform {
  transform(ads: Ad[], make: string): string[] {
    if (!ads) {
      return [];
    }

    return Array.from(new Set(ads.filter((ad) => ad.make === make).map((ad) => ad.model))).sort((a, b) =>
      a.localeCompare(b)
    );
  }
}
