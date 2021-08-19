import { Component, ElementRef, OnInit } from '@angular/core';
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
  public myAds$: Observable<Ad[] | null> | undefined;
  public host: string | undefined;

  constructor(
    private readonly adsService: AdsService,
    private readonly authFacade: AuthFacade,
    private readonly elemRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.host = this.elemRef.nativeElement.tagName.toLowerCase();

    this.subscriptions.push(
      this.authFacade.user$.subscribe((user) => {
        if (user) {
          // User will always be available at this point but instead using '!'
          // to tell the Angular i'm using logical statement for aesthetic reasons only
          this.myAds$ = this.adsService.loadAdsByUser(user.id);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
