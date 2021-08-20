import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AdsFacade } from 'src/app/store/facades/ads.facade';

@Component({
  selector: 'app-latest-ads',
  templateUrl: './latest-ads.component.html',
  styleUrls: ['./latest-ads.component.sass'],
})
export class LatestAdsComponent implements OnInit, OnDestroy {
  private readonly subscriptions: Subscription[] = [];
  public images: { path: string }[] | undefined;
  public height: number = window.innerHeight * 0.25;

  constructor(
    private readonly adsFacade: AdsFacade,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.adsFacade.ads$.subscribe((ads) => {
        if (!ads) {
          return;
        }

        this.images = ads
          .slice()
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
          .map((ad) => ({ path: ad.picture }))
          .slice(0, 10);

        this.changeDetectorRef.detectChanges();

        document.querySelectorAll('carousel img').forEach((img) => {
          img.addEventListener('click', (e) => {
            const img = (e.target as HTMLImageElement).src;
            const ad = ads.find((ad) => ad.picture === img);

            if (!ad) {
              return;
            }

            this.router.navigate([`ads/${ad.id}`]);
          });
        });
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
