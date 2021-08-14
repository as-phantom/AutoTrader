import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Ad } from 'src/API';
import { LoadDataService } from 'src/app/modules/core/services/load-data.service';

@Component({
  selector: 'app-ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.sass'],
})
export class AdsListComponent implements OnInit, OnDestroy {
  private readonly subscriptions: Subscription[] = [];
  public adsList$: Observable<Ad[] | null> | undefined;

  constructor(private readonly route: ActivatedRoute, private readonly loadDataService: LoadDataService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.route.queryParams.subscribe((queryParams: Params) => {
        const { make, model, region, minPrice, maxPrice, condition } = queryParams;
        this.adsList$ = this.loadDataService.loadAdsByFilters({
          make,
          model,
          region,
          minPrice,
          maxPrice,
          condition,
        });
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
