import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faQuestionCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-find-ad',
  templateUrl: './find-ad.component.html',
  styleUrls: ['./find-ad.component.sass'],
})
export class FindAdComponent implements OnInit {
  public submitted: boolean = false;
  public showInfoBox: boolean = false;
  public isFormValid: boolean = false;

  public makes: string[] | [] = [];

  public get faQuestionCircle(): IconDefinition {
    return faQuestionCircle;
  }

  public readonly formGroup: FormGroup = new FormGroup({
    make: new FormControl('', []),
    model: new FormControl('', []),
    region: new FormControl('', []),
    minPrice: new FormControl('', []),
    maxPrice: new FormControl('', []),
    condition: new FormControl('', []),
  });

  constructor() {}

  public onHoverInfo(): void {
    this.showInfoBox = true;
  }

  public onLeaveInfo(): void {
    this.showInfoBox = false;
  }

  public onSubmit(): void {
    // this.submitted = true;
  }

  ngOnInit() {}
}

// 1 fetch all records, filter only two properties (make & model)
// 2 remove duplicates makes and models in order to create key-value pairs to dynamically create a dropdown list
// create option for each key-value pair