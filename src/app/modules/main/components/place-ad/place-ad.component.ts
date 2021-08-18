import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Region } from 'src/API';
import { NotificationsService } from 'src/app/modules/core/services/notifications.service';
import { RegionsFacade } from 'src/app/store/facades/regions.facade';

@Component({
  selector: 'app-place-ad',
  templateUrl: './place-ad.component.html',
  styleUrls: ['./place-ad.component.sass'],
})
export class PlaceAdComponent implements OnInit {
  public isFormValid: boolean | undefined;

  public regions$: Observable<Region[] | undefined> | undefined;

  public readonly formGroup: FormGroup = new FormGroup({
    region: new FormControl(),
    price: new FormControl('', [Validators.min(0), Validators.max(10000000)]),
  });

  constructor(
    private readonly notificationService: NotificationsService,
    private readonly regionsFacade: RegionsFacade,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.regions$ = this.regionsFacade.regions$.pipe();
  }

  public onSubmit(): void {
    this.isFormValid = true;

    const price = this.formGroup.controls.price.value;
    const region = this.formGroup.controls.region.value;

    // Validate group controls
    (() => {
      // Validates both negative values and non numeric values for price
      if (price.split('').map(isNaN).includes(true)) {
        this.notificationService.error("Price can only be a positive number.");
        this.isFormValid = false;
      }

      // Validates maximum value for price
      if (price > 10000000) {
        this.notificationService.error("Price can't be over ten millions.");
        this.isFormValid = false;
      }
    })();

    if (!this.isFormValid) {
      return;
    }

    const queryParams = { price, region };

    this.router.navigate(['admin/create'], { queryParams });
  }
}
