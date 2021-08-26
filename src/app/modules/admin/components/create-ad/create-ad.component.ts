import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { debounceTime, switchMap, take } from 'rxjs/operators';
import { Condition, Currency, Fuel, Region, Transmission, User } from 'src/API';
import { AdsService } from 'src/app/modules/core/services/ads.service';
import { NotificationsService } from 'src/app/modules/core/services/notifications.service';
import { StorageService } from 'src/app/modules/core/services/storage.service';
import { AuthFacade } from 'src/app/store/facades/auth.facade';
import { RegionsFacade } from 'src/app/store/facades/regions.facade';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.sass'],
})
export class CreateAdComponent implements OnInit, OnDestroy {
  private readonly subscriptions: Subscription[] = [];
  public regions$: Observable<Region[] | undefined> | undefined;
  public files: File[] | undefined;
  public user: User | undefined;
  public uploading: boolean | undefined;

  public readonly condition = Condition;
  public readonly transmission = Transmission;
  public readonly currency = Currency;
  public readonly fuel = Fuel;

  public readonly formGroup: FormGroup = new FormGroup({
    make: new FormControl(),
    model: new FormControl(),
    color: new FormControl(),
    engine: new FormControl(),
    price: new FormControl('', [Validators.min(0), Validators.max(10000000)]),
    year: new FormControl(),
    mileage: new FormControl(),
    transmission: new FormControl(),
    currency: new FormControl(),
    description: new FormControl(),
    fuel: new FormControl(),
    contactNumber: new FormControl(),
    region: new FormControl(),
    condition: new FormControl(),
  });

  constructor(
    private readonly notificationsService: NotificationsService,
    private readonly storageService: StorageService,
    private readonly regionFacade: RegionsFacade,
    private readonly adsService: AdsService,
    private readonly route: ActivatedRoute,
    private readonly authFacade: AuthFacade,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.regions$ = this.regionFacade.regions$;
    this.authFacade.user$.pipe(take(1)).subscribe((user) => (this.user = user));

    this.subscriptions.push(
      this.route.queryParams.subscribe((queryParams: Params) => {
        this.formGroup.controls.price.setValue(queryParams.price);
        this.formGroup.controls.make.setValue(queryParams.make);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  public onSubmit(): void {
    const make = this.formGroup.controls.make.value?.trim();
    const model = this.formGroup.controls.model.value?.trim();
    const regionID = this.formGroup.controls.region.value?.trim();
    const condition = this.formGroup.controls.condition.value?.trim();
    const color = this.formGroup.controls.color.value?.trim();
    const engine = this.formGroup.controls.engine.value;
    const price = this.formGroup.controls.price.value;
    const year = this.formGroup.controls.year.value?.trim();
    const mileage = this.formGroup.controls.mileage.value;
    const description = this.formGroup.controls.description.value?.trim();
    const transmission = this.formGroup.controls.transmission.value?.trim();
    const currency = this.formGroup.controls.currency.value?.trim();
    const fuel = this.formGroup.controls.fuel.value?.trim();
    const phone = this.formGroup.controls.contactNumber.value?.trim();

    // Validate group controls
    if (!make || make.length < 3 || make.split('').map(isNaN).includes(false)) {
      this.notificationsService.error('Valid make is required!');
      return;
    }

    if (!model || model.length < 2) {
      this.notificationsService.error('Valid model is required!');
      return;
    }

    if (!year || Number(year) < 1850 || Number(year) > new Date().getFullYear()) {
      this.notificationsService.error('Valid year is required!');
      return;
    }

    if (!regionID) {
      this.notificationsService.error('Please choose region.');
      return;
    }

    if (!condition) {
      this.notificationsService.error('Please choose condition.');
      return;
    }

    if (!engine) {
      this.notificationsService.error('Engine size is required!');
      return;
    }

    if (!fuel) {
      this.notificationsService.error('Please choose fuel type.');
      return;
    }

    if (!transmission) {
      this.notificationsService.error('Please choose transmission type.');
      return;
    }

    if (!price) {
      this.notificationsService.error('Price is required!');
      return;
    }

    if (!price) {
      this.notificationsService.error('Price can only be a positive number!');
      return;
    }

    if (Number(price) > 10000000) {
      this.notificationsService.error("Price can't be over ten millions!");
      return;
    }

    if (!mileage) {
      this.notificationsService.error('Mileage is required!');
      return;
    }

    if (!color || color.split('').map(isNaN).includes(false)) {
      this.notificationsService.error('Valid color is required!');
      return;
    }

    if (!currency) {
      this.notificationsService.error('Please choose the currency you prefer.');
      return;
    }

    if (!phone) {
      this.notificationsService.error('Contact number is required!');
      return;
    }

    if (!description || description.length < 3) {
      this.notificationsService.error('Description is required!');
      return;
    }

    if (!this.files) {
      this.notificationsService.error('At least one picture is required!');
      return;
    }

    this.uploading = true;

    this.storageService
      .uploadFileToS3Observable(this.files.shift()!)
      .pipe(
        debounceTime(350),
        switchMap((picture) =>
          this.adsService.createAd({
            userID: this.user!.id,
            picture,
            make,
            model,
            regionID,
            condition,
            color,
            engine: Number(engine),
            price: Number(price),
            year: Number(year),
            mileage: Number(mileage),
            description,
            transmission,
            currency,
            fuel,
            phone,
          })
        )
      )
      .subscribe((ad) => {
        if (this.files?.length) {
          combineLatest(this.files.map((f) => this.storageService.uploadFileToS3Observable(f)))
            .pipe(switchMap((images) => combineLatest(images.map((i) => this.adsService.createPicture(ad!.id, i!)))))
            .subscribe({
              next: () => {
                this.notificationsService.success('Ad successfully created!');
                this.uploading = false;
                this.router.navigate(['ads', ad!.id]);
              },
              error: () => {
                this.uploading = false;
                this.notificationsService.error('Something went wrong! Try again later.');
              },
            });
        }
      });
  }

  public onUploadInput(e: Event): void {
    const input = e.target as HTMLInputElement;

    if (!input.files) {
      return;
    }

    if (input.files.length > 5) {
      this.notificationsService.warning('You can only upload up to 5 pictures!');
      return;
    }

    this.files = Array.from(input.files);
  }
}
