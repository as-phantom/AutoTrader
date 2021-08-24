import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Ad, User } from 'src/API';
import { AdsService } from 'src/app/modules/core/services/ads.service';
import { AuthFacade } from 'src/app/store/facades/auth.facade';

@Component({
  selector: 'app-ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.sass'],
})
export class AdsListComponent implements OnInit, OnDestroy {
  private readonly subscriptions: Subscription[] = [];
  public user: User | undefined;
  public host: string | undefined;
  public adsList$: Observable<Ad[] | null> | undefined;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly adsService: AdsService,
    private readonly elemRef: ElementRef,
    private readonly authFacade: AuthFacade
  ) {}

  ngOnInit(): void {
    this.host = this.elemRef.nativeElement.tagName.toLowerCase();

    this.subscriptions.push(
      this.route.queryParams.subscribe((queryParams: Params) => {
        const { make, model, region, minPrice, maxPrice, condition } = queryParams;
        this.adsList$ = this.adsService.loadAdsByFilters({
          make,
          model,
          region,
          minPrice,
          maxPrice,
          condition,
        });
      }),
      this.authFacade.user$.subscribe((user) => {
        this.user = user;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
