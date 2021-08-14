import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Ad } from 'src/API';
import { AdsService } from 'src/app/modules/core/services/ads.service';

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.sass'],
})
export class AdDetailsComponent implements OnInit, OnDestroy {
  private readonly subscriptions: Subscription[] = [];
  public ad$: Observable<Ad | null> | undefined;

  constructor(private readonly route: ActivatedRoute, private readonly adsService: AdsService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.route.params.subscribe((params: Params) => {
        this.ad$ = this.adsService.loadAdById(params.id);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
