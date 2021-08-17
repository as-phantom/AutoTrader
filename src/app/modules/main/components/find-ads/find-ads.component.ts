import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faQuestionCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Ad, Condition, Region } from 'src/API';
import { AdsFacade } from 'src/app/store/facades/ads.facade';
import { RegionsFacade } from 'src/app/store/facades/regions.facade';

@Component({
  selector: 'app-find-ad',
  templateUrl: './find-ads.component.html',
  styleUrls: ['./find-ads.component.sass'],
})
export class FindAdsComponent implements OnInit {
  public submitted: boolean = false;
  public showInfoBox: boolean = false;
  public isFormValid: boolean = false;
  public condition = Condition;

  public ads$: Observable<Ad[] | undefined> | undefined;
  public regions$: Observable<Region[] | undefined> | undefined;

  public get faQuestionCircle(): IconDefinition {
    return faQuestionCircle;
  }

  public readonly formGroup: FormGroup = new FormGroup({
    make: new FormControl(),
    model: new FormControl(),
    region: new FormControl(),
    minPrice: new FormControl('', [Validators.min(0)]),
    maxPrice: new FormControl('', [Validators.max(10000000)]),
    condition: new FormControl(),
  });

  constructor(
    private readonly regionsFacade: RegionsFacade,
    private readonly adsFacade: AdsFacade,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.ads$ = this.adsFacade.ads$;
    this.regions$ = this.regionsFacade.regions$;
  }

  public onHoverInfo(): void {
    this.showInfoBox = true;
  }

  public onLeaveInfo(): void {
    this.showInfoBox = false;
  }

  public onSubmit(): void {
    this.submitted = true;

    const make = this.formGroup.controls.make.value;
    const model = this.formGroup.controls.model.value;
    const region = this.formGroup.controls.region.value;
    const minPrice = this.formGroup.controls.minPrice.value;
    const maxPrice = this.formGroup.controls.maxPrice.value;
    const condition = this.formGroup.controls.condition.value;

    const queryParams = {
      make,
      model,
      region,
      minPrice,
      maxPrice,
      condition,
    };

    this.router.navigate(['/search'], { queryParams });
  }
}
