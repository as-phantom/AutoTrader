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
  public regions$: Observable<Region[] | undefined> | undefined;

  public readonly formGroup: FormGroup = new FormGroup({
    make: new FormControl(),
    price: new FormControl('', [Validators.min(0), Validators.max(10000000)]),
  });

  constructor(
    private readonly notificationsService: NotificationsService,
    private readonly regionsFacade: RegionsFacade,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.regions$ = this.regionsFacade.regions$;
  }

  public onSubmit(): void {
    const make = this.formGroup.controls.make.value?.trim();
    const price = this.formGroup.controls.price.value;

    // Validate group controls

    if (price < 0) {
      this.notificationsService.error('Price can only be a positive number!');
      return;
    }

    if (price > 10000000) {
      this.notificationsService.error("Price can't be over ten millions.");
      return;
    }

    if (make && make.split('').map(isNaN).includes(false)) {
      this.notificationsService.error('Use a valid make.');
      return;
    }

    const queryParams = { make, price };
    this.router.navigate(['user/ads/create'], { queryParams });
  }
}
