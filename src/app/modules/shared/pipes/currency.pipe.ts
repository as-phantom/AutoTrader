import { Pipe, PipeTransform } from '@angular/core';
import { Currency } from '../../../../API';

@Pipe({
  name: 'currency',
})
export class CurrencyPipe implements PipeTransform {
  transform(currency: Currency): string {
    switch (currency) {
      case Currency.EUR:
        return '€';
      case Currency.USD:
        return '$';
    }
  }
}
