import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-find-ad',
  templateUrl: './find-ad.component.html',
  styleUrls: ['./find-ad.component.sass'],
})
export class FindAdComponent {
  public searchForm: FormGroup;
  public submitted: boolean = false;
  public isFormValid: boolean = false;

  constructor(public search: FormBuilder) {
    this.searchForm = this.search.group({
      make: [''],
      model: [''],
      region: [''],
      minPrice: [''],
      maxPrice: [''],
      condition: [''],
    });
  }

  onSubmit() {
    console.log(this.searchForm.value);

    // this.submitted = true;
  }
}
