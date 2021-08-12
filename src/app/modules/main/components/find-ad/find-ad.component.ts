import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faQuestionCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Ad, Region } from 'src/API';
import { AdsFacade } from 'src/app/store/facades/ads.facade';
import { RegionsFacade } from 'src/app/store/facades/regions.facade';

@Component({
  selector: 'app-find-ad',
  templateUrl: './find-ad.component.html',
  styleUrls: ['./find-ad.component.sass'],
})
export class FindAdComponent implements OnInit {
  public submitted: boolean = false;
  public showInfoBox: boolean = false;
  public isFormValid: boolean = false;

  public ads$: Observable<Ad[] | undefined> | undefined;
  public regions$: Observable<Region[] | undefined> | undefined;

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

  constructor(private readonly regionsFacade: RegionsFacade, private readonly adsFacade: AdsFacade) {}

  public onHoverInfo(): void {
    this.showInfoBox = true;
  }

  public onLeaveInfo(): void {
    this.showInfoBox = false;
  }

  public onSubmit(): void {
    this.submitted = true;
  }

  ngOnInit(): void {
    this.ads$ = this.adsFacade.ads$.pipe();
    this.regions$ = this.regionsFacade.regions$.pipe();
  }
}

// 1 fetch all records, filter only two properties (make & model)
// 2 remove duplicates makes and models in order to create key-value pairs to dynamically create a dropdown list
// create option for each key-value pair
