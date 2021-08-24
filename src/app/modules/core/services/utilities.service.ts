import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilitiesService {
  public validate(value: any, validator: (v: any) => boolean): boolean {
    return validator(value);
  }

  constructor() {}
}
