import { Pipe, PipeTransform } from '@angular/core';
import { Region } from 'src/API';

@Pipe({
  name: 'sortRegions',
})
export class SortRegionsPipe implements PipeTransform {
  transform(regions: Region[] | null | undefined): Region[] {
    if (!regions) {
      return [];
    }

    return regions.slice().sort((a, b) => a.name.localeCompare(b.name));
  }
}
