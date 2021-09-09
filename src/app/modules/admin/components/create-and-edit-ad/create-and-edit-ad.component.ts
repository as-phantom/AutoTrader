import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { debounceTime, switchMap, take } from 'rxjs/operators';
import { Ad, Condition, Currency, Fuel, Region, Transmission, User } from 'src/API';
import { adService } from 'src/app/modules/core/services/ads.service';
import { notificationService } from 'src/app/modules/core/services/notifications.service';
import { StorageService } from 'src/app/modules/core/services/storage.service';
import { AuthFacade } from 'src/app/store/facades/auth.facade';
import { RegionsFacade } from 'src/app/store/facades/regions.facade';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-and-edit-ad.component.html',
  styleUrls: ['./create-and-edit-ad.component.sass'],
})
export class CreateAndEditAdComponent implements OnInit, OnDestroy {
  private readonly subscriptions: Subscription[] = [];
  public loading: boolean | undefined;
  public files: File[] | undefined;
  public user: User | undefined;
  public adID: string | undefined;
  public regions$: Observable<Region[] | undefined> | undefined;
  public ad$: Observable<Ad | null> | undefined;
  private latitude: number | undefined;
  private longitude: number | undefined;
  private locationAccessGranted: boolean | undefined;

  public readonly condition = Condition;
  public readonly transmission = Transmission;
  public readonly currency = Currency;
  public readonly fuel = Fuel;

  public readonly formGroup: FormGroup = new FormGroup({
    make: new FormControl(),
    model: new FormControl(),
    color: new FormControl(),
    engine: new FormControl('', [Validators.min(1), Validators.max(27)]),
    price: new FormControl('', [Validators.min(0), Validators.max(10000000)]),
    year: new FormControl(),
    mileage: new FormControl('', [Validators.min(0)]),
    transmission: new FormControl(),
    currency: new FormControl(),
    description: new FormControl(),
    fuel: new FormControl(),
    contactNumber: new FormControl('', [Validators.minLength(5)]),
    region: new FormControl(),
    condition: new FormControl(),
  });

  constructor(
    private readonly notificationService: notificationService,
    private readonly storageService: StorageService,
    private readonly regionFacade: RegionsFacade,
    private readonly adService: adService,
    private readonly route: ActivatedRoute,
    private readonly authFacade: AuthFacade,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.adID = this.route.snapshot.params.id;

    this.regions$ = this.regionFacade.regions$;
    this.authFacade.user$.pipe(take(1)).subscribe((user) => (this.user = user));

    if (this.adID) {
      // Edit ad
      this.loading = true;
      this.adService.loadAdById(this.adID).subscribe((ad) => {
        if (ad) {
          this.formGroup.controls.make.setValue(ad.make);
          this.formGroup.controls.model.setValue(ad.model);
          this.formGroup.controls.year.setValue(ad.year);
          this.formGroup.controls.region.setValue(ad.region.id);
          this.formGroup.controls.condition.setValue(ad.condition);
          this.formGroup.controls.engine.setValue(ad.engine);
          this.formGroup.controls.fuel.setValue(ad.fuel);
          this.formGroup.controls.transmission.setValue(ad.transmission);
          this.formGroup.controls.price.setValue(ad.price);
          this.formGroup.controls.mileage.setValue(ad.mileage);
          this.formGroup.controls.color.setValue(ad.color);
          this.formGroup.controls.currency.setValue(ad.currency);
          this.formGroup.controls.contactNumber.setValue(ad.phone);
          this.formGroup.controls.description.setValue(ad.description);
        }
        this.loading = false;
      });
    } else {
      // Creating ad
      this.subscriptions.push(
        this.route.queryParams.subscribe((params: Params) => {
          this.formGroup.controls.price.setValue(params.price);
          this.formGroup.controls.make.setValue(params.make);
        })
      );
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  public async onSubmit(): Promise<void> {
    const make = this.formGroup.controls.make.value?.trim();
    const model = this.formGroup.controls.model.value?.trim();
    const regionID = this.formGroup.controls.region.value;
    const condition = this.formGroup.controls.condition.value;
    const color = this.formGroup.controls.color.value?.trim();
    const engine = this.formGroup.controls.engine.value;
    const price = this.formGroup.controls.price.value;
    const year = this.formGroup.controls.year.value;
    const mileage = this.formGroup.controls.mileage.value;
    const description = this.formGroup.controls.description.value?.trim();
    const transmission = this.formGroup.controls.transmission.value;
    const currency = this.formGroup.controls.currency.value;
    const fuel = this.formGroup.controls.fuel.value;
    const phone = this.formGroup.controls.contactNumber.value?.trim();

    // Location access needed
    await (() => {
      // Wait until location access is granted ot denied
      return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition(
          (location) => {
            this.latitude = location.coords.latitude;
            this.longitude = location.coords.longitude;

            this.locationAccessGranted = true;
            resolve(true);
          },
          () => {
            this.locationAccessGranted = false;
            resolve(false);
          }
        );
      });
    })();

    if (!this.locationAccessGranted) {
      this.notificationService.info('You need to allow access to your location!');

      setTimeout(() => {
        // Instruction to allow access to location in case of rejection only for Chrome
        const url = 'https://support.google.com/chrome/answer/142065?hl=en';
        window.open(url, '_blank');
      }, 3000);

      return;
    }

    // Validate group controls
    if (!make || make.length < 3 || make.split('').map(isNaN).includes(false)) {
      this.notificationService.error('Valid make is required!');
      return;
    }

    if (!model || model.length < 2) {
      this.notificationService.error('Valid model is required!');
      return;
    }

    if (!year || Number(year) < 1850 || Number(year) > new Date().getFullYear()) {
      this.notificationService.error('Valid year is required!');
      return;
    }

    if (!regionID) {
      this.notificationService.error('Please choose region.');
      return;
    }

    if (!condition) {
      this.notificationService.error('Please choose condition.');
      return;
    }

    if (!engine) {
      this.notificationService.error('Engine size is required!');
      return;
    }

    if (engine < 0) {
      this.notificationService.error('Engine size can only be a positive number!');
      return;
    }

    if (engine > 27) {
      this.notificationService.error('Please enter a valid engine size!');
      return;
    }

    if (!fuel) {
      this.notificationService.error('Please choose fuel type.');
      return;
    }

    if (!transmission) {
      this.notificationService.error('Please choose transmission type.');
      return;
    }

    if (!price) {
      this.notificationService.error('Price is required!');
      return;
    }

    if (price < 0) {
      this.notificationService.error('Price can only be a positive number!');
      return;
    }

    if (price > 10000000) {
      this.notificationService.error("Price can't be over ten millions!");
      return;
    }

    if (!mileage) {
      this.notificationService.error('Mileage is required!');
      return;
    }

    if (mileage < 0) {
      this.notificationService.error('Mileage can only be a positive number!');
      return;
    }

    if (
      !color ||
      color
        .split('')
        .filter((x: string) => x !== ' ')
        .map(isNaN)
        .includes(false)
    ) {
      this.notificationService.error('Valid color is required!');
      return;
    }

    if (!currency) {
      this.notificationService.error('Please choose the currency you prefer.');
      return;
    }

    if (!phone) {
      this.notificationService.error('Contact number is required!');
      return;
    }

    if (!description || description.length < 3) {
      this.notificationService.error('Description is required!');
      return;
    }

    if (!this.adID && !this.files) {
      this.notificationService.error('At least one picture is required!');
      return;
    }

    this.loading = true;

    if (this.adID) {
      // Update ad
      this.adService
        .updateAd(this.adID, {
          userID: this.user!.id,
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
          latitude: this.latitude,
          longitude: this.longitude,
        })
        .subscribe(() => {
          if (this.files?.length) {
            combineLatest(this.files.map((f) => this.storageService.uploadFileToS3Observable(f)))
              .pipe(
                switchMap((images) => combineLatest(images.map((i) => this.adService.createPicture(this.adID!, i!))))
              )
              .subscribe({
                next: () => {
                  this.loading = false;
                  this.notificationService.success('Ad successfully updated!');
                  this.router.navigate(['ads', this.adID]);
                },
                error: (err) => {
                  console.log(err);

                  this.loading = false;
                  this.notificationService.error('Something went wrong! Try again later.');
                },
              });
          } else {
            this.loading = false;
            this.notificationService.success('Ad successfully updated!');
            this.router.navigate(['ads', this.adID]);
          }
        });
    } else {
      // Create ad
      this.storageService
        //  Taking the first photo as main one
        .uploadFileToS3Observable(this.files?.shift()!)
        .pipe(
          debounceTime(350),
          switchMap((picture) =>
            this.adService.createAd({
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
              latitude: this.latitude,
              longitude: this.longitude,
            })
          )
        )
        .subscribe((ad) => {
          if (this.files?.length) {
            combineLatest(this.files.map((f) => this.storageService.uploadFileToS3Observable(f)))
              .pipe(switchMap((images) => combineLatest(images.map((i) => this.adService.createPicture(ad!.id, i!)))))
              .subscribe({
                next: () => {
                  this.loading = false;
                  this.notificationService.success('Ad successfully created!');
                  this.router.navigate(['ads', ad!.id]);
                },
                error: () => {
                  this.loading = false;
                  this.notificationService.error('Something went wrong! Try again later.');
                },
              });
          } else {
            this.loading = false;
            this.notificationService.success('Ad successfully created!');
            this.router.navigate(['ads', ad!.id]);
          }
        });
    }
  }

  public onUploadInput(e: Event): void {
    const input = e.target as HTMLInputElement;

    if (!input.files) {
      return;
    }

    if (input.files.length > 5) {
      this.notificationService.warning('You can only upload up to 5 pictures!');
      return;
    }

    this.files = Array.from(input.files);
  }
}
