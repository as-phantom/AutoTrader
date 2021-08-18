import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faQuestionCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Ad, Condition, Region } from 'src/API';
import { NotificationsService } from 'src/app/modules/core/services/notifications.service';
import { AdsFacade } from 'src/app/store/facades/ads.facade';
import { RegionsFacade } from 'src/app/store/facades/regions.facade';

@Component({
  selector: 'app-find-ad',
  templateUrl: './find-ads.component.html',
  styleUrls: ['./find-ads.component.sass'],
})
export class FindAdsComponent implements OnInit {
  public showInfoBox: boolean | undefined;
  public isFormValid: boolean | undefined;
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
    minPrice: new FormControl('', [Validators.min(0), Validators.max(10000000)]),
    maxPrice: new FormControl('', [Validators.min(0), Validators.max(10000000)]),
    condition: new FormControl(),
  });

  constructor(
    private readonly notificationService: NotificationsService,
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

  public verifyIfMakeIsPicked(): void {
    const make = this.formGroup.controls.make.value;
    if (!make) {
      this.notificationService.error('Please chose make before choosing a model.');
    }
  }

  public onSubmit(): void {
    this.isFormValid = true;

    const make = this.formGroup.controls.make.value;
    const model = this.formGroup.controls.model.value;
    const region = this.formGroup.controls.region.value;
    const minPrice = this.formGroup.controls.minPrice.value;
    const maxPrice = this.formGroup.controls.maxPrice.value;
    const condition = this.formGroup.controls.condition.value;

    // Validate group controls
    (() => {
      // Validates both negative values and non numeric values for minPrice
      if (minPrice.split('').map(isNaN).includes(true)) {
        this.notificationService.error("Min price can't contain characters neither can be a negative number.");
        this.isFormValid = false;
      }

      // Validates maximum min value for minPrice
      if (minPrice > 10000000) {
        this.notificationService.error("Min price can't be over ten millions.");
        this.isFormValid = false;
      }

      // Validates both negative values and non numeric values for maxPrice
      if (maxPrice.split('').map(isNaN).includes(true)) {
        this.notificationService.error("Max price can't contain characters neither can be a negative number!");
        this.isFormValid = false;
      }

      // Validates maximum max value for maxPrice
      if (maxPrice > 10000000) {
        this.notificationService.error("Max price can't be over ten millions!");
        this.isFormValid = false;
      }
    })();

    if (!this.isFormValid) {
      return;
    }

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
