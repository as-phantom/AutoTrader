import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Condition, Currency, Fuel, Region, Transmission } from 'src/API';
import { AdsService } from 'src/app/modules/core/services/ads.service';
import { NotificationsService } from 'src/app/modules/core/services/notifications.service';
import { RegionsFacade } from 'src/app/store/facades/regions.facade';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.sass'],
})
export class CreateAdComponent implements OnInit, OnDestroy {
  private readonly subscriptions: Subscription[] = [];
  public regions$: Observable<Region[] | undefined> | undefined;
  private isFormValid: boolean | undefined;
  public regionID: string | undefined;
  public price: number | undefined;

  public readonly condition = Condition;
  public readonly transmission = Transmission;
  public readonly currency = Currency;
  public readonly fuel = Fuel;

  public readonly formGroup: FormGroup = new FormGroup({
    make: new FormControl(),
    model: new FormControl(),
    color: new FormControl(),
    engine: new FormControl(),
    price: new FormControl(),
    year: new FormControl(),
    mileage: new FormControl(),
    transmission: new FormControl(),
    currency: new FormControl(),
    description: new FormControl(),
    fuel: new FormControl(),
    phone: new FormControl(),
    pictures: new FormControl(),
    region: new FormControl(),
    condition: new FormControl(),
  });

  constructor(
    private readonly notificationService: NotificationsService,
    private readonly regionFacade: RegionsFacade,
    private readonly adsService: AdsService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.regions$ = this.regionFacade.regions$;

    this.subscriptions.push(
      this.route.queryParams.subscribe((queryParams: Params) => {
        const { region, price } = queryParams;

        this.regionID = region || undefined;
        // Checks for empty string and for non numeric values even though this has been done in the place ad component
        if (price !== '' && price.split('').map(isNaN).includes(true) === false) {
          this.price = Number(queryParams.price);
        }
      })
    );
  }

  public onSubmit(): void {
    this.isFormValid = true;

    const make = this.formGroup.controls.make.value;
    const model = this.formGroup.controls.model.value;
    const region = this.formGroup.controls.region.value;
    const condition = this.formGroup.controls.condition.value;
    const color = this.formGroup.controls.color.value;
    const engine = this.formGroup.controls.engine.value;
    const price = this.formGroup.controls.price.value;
    const year = this.formGroup.controls.year.value;
    const mileage = this.formGroup.controls.mileage.value;
    const description = this.formGroup.controls.description.value;
    const transmission = this.formGroup.controls.transmission.value;
    const currency = this.formGroup.controls.currency.value;
    const fuel = this.formGroup.controls.fuel.value;
    const phone = this.formGroup.controls.phone.value;
    const pictures = this.formGroup.controls.pictures.value;

    // // Validate group controls
    // ((): void => {
    //   // Validates both negative values and non numeric values for minPrice
    //   if (minPrice.split('').map(isNaN).includes(true)) {
    //     this.notificationService.error("Min price can only be a positive number");
    //     this.isFormValid = false;
    //   }

    //   // Validates maximum min value for minPrice
    //   if (minPrice > 10000000) {
    //     this.notificationService.error("Min price can't be over ten millions");
    //     this.isFormValid = false;
    //   }

    //   // Validates both negative values and non numeric values for maxPrice
    //   if (maxPrice.split('').map(isNaN).includes(true)) {
    //     this.notificationService.error("Max price can only be a positive number");
    //     this.isFormValid = false;
    //   }

    //   // Validates maximum max value for maxPrice
    //   if (maxPrice > 10000000) {
    //     this.notificationService.error("Max price can't be over ten millions");
    //     this.isFormValid = false;
    //   }
    // })();

    // if (!this.isFormValid) {
    //   return;
    // }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
