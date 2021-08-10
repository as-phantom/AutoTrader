import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Region } from 'src/API';
import { RegionsFacade } from 'src/app/store/facades/regions.facade';

@Component({
  selector: 'app-place-ad',
  templateUrl: './place-ad.component.html',
  styleUrls: ['./place-ad.component.sass'],
})
export class PlaceAdComponent implements OnInit {
  public submitted: boolean = false;
  public showInfoBox: boolean = false;
  public isFormValid: boolean = false;

  public makes: string[] | [] = [];
  public regions$: Observable<Region[] | undefined> | undefined;

  public readonly formGroup: FormGroup = new FormGroup({
    region: new FormControl('', []),
    year: new FormControl('', []),
  });

  constructor(private readonly regionsFacade: RegionsFacade) {}

  public onHoverInfo(): void {
    this.showInfoBox = true;
  }

  public onLeaveInfo(): void {
    this.showInfoBox = false;
  }

  public onSubmit(): void {
    // this.submitted = true;
  }

  ngOnInit(): void {
    this.regions$ = this.regionsFacade.regions$.pipe();
  }
}
