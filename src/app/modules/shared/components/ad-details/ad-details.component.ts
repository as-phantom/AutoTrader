import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Ad } from 'src/API';
import { LoadDataService } from 'src/app/modules/core/services/load-data.service';

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.sass'],
})
export class AdDetailsComponent implements OnInit, OnDestroy {
  private readonly subscriptions: Subscription[] = [];
  public ad$: Observable<Ad | null> | undefined;

  constructor(private readonly route: ActivatedRoute, private readonly loadDataService: LoadDataService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.route.params.subscribe((params: Params) => {
        this.ad$ = this.loadDataService.loadAdById(params.id);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
