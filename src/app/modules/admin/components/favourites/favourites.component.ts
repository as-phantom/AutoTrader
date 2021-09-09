import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Ad, User } from 'src/API';
import { AdsService } from 'src/app/modules/core/services/ads.service';
import { FavoriteService } from 'src/app/modules/core/services/favorite.service';
import { AuthFacade } from 'src/app/store/facades/auth.facade';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.sass'],
})
export class FavouritesComponent implements OnInit, OnDestroy {
  private readonly subscriptions: Subscription[] = [];
  public host: string | undefined;
  public user: User | undefined;
  public ads$: Observable<Ad[]> | undefined;

  constructor(
    private readonly authFacade: AuthFacade,
    private readonly elemRef: ElementRef,
    private readonly favoriteService: FavoriteService
  ) {}

  ngOnInit(): void {
    this.host = this.elemRef.nativeElement.tagName.toLowerCase();

    this.subscriptions.push(
      this.authFacade.user$.subscribe((user) => {
        if (user) {
          this.user = user;
          this.ads$ = this.favoriteService.loadFavorites(user.id);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
