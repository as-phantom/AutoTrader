import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Ad } from 'src/API';
import { AdsService } from 'src/app/modules/core/services/ads.service';
import { AuthFacade } from 'src/app/store/facades/auth.facade';

@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.component.html',
  styleUrls: ['./my-ads.component.sass'],
})
export class MyAdsComponent implements OnInit {
  private readonly subscriptions: Subscription[] = [];
  public adsList$: Observable<Ad[] | null> | undefined;

  constructor(private readonly adsService: AdsService, private readonly authFacade: AuthFacade) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.authFacade.user$.subscribe((user) => {
        this.adsList$ = this.adsService.loadAdsByUser(user!.id);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
