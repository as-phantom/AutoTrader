import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-find-ad',
  templateUrl: './find-ad.component.html',
  styleUrls: ['./find-ad.component.sass'],
})
export class FindAdComponent {
  public submitted: boolean = false;
  public isFormValid: boolean = false;

  public readonly formGroup: FormGroup = new FormGroup({
    make: new FormControl('', []),
    model: new FormControl('', []),
    region: new FormControl('', []),
    minPrice: new FormControl('', []),
    maxPrice: new FormControl('', []),
    condition: new FormControl('', []),
  });

  constructor() {}

  onSubmit() {
    console.log(this.formGroup.value);

    // this.submitted = true;
  }
}
