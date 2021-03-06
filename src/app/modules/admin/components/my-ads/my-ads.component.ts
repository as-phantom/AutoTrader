import { Component, ElementRef, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Ad, User } from 'src/API';
import { AdsService } from 'src/app/modules/core/services/ads.service';
import { AuthFacade } from 'src/app/store/facades/auth.facade';

@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.component.html',
  styleUrls: ['./my-ads.component.sass'],
})
export class MyAdsComponent implements OnInit {
  private readonly subscriptions: Subscription[] = [];
  public host: string | undefined;
  public user: User | undefined;
  public ads$: Observable<Ad[] | null> | undefined;

  constructor(
    private readonly adService: AdsService,
    private readonly authFacade: AuthFacade,
    private readonly elemRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.host = this.elemRef.nativeElement.tagName.toLowerCase();

    this.subscriptions.push(
      this.authFacade.user$.subscribe((user) => {
        if (user) {
          this.user = user;
          this.ads$ = this.adService.loadAdsByUser(user.id);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
