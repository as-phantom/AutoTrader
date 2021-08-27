import { Component, HostListener } from '@angular/core';
import { IconDefinition, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
import { Auth } from 'aws-amplify';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthService } from './modules/core/services/auth.service';
import { AdsFacade } from './store/facades/ads.facade';
import { RegionsFacade } from './store/facades/regions.facade';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from './modules/shared/components/bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'AutoTrader';
  // Scroll to top
  public shown: boolean | undefined;
  public topPosToStartShowing = 100;
  // For each observable that's fetching data
  public loading: boolean[] = [true, true];
  private readonly subscriptions: Subscription[] = [];

  public get faArrow(): IconDefinition {
    return faChevronCircleUp;
  }

  constructor(
    private readonly authService: AuthService,
    private readonly regionsFacade: RegionsFacade,
    private readonly adsFacade: AdsFacade,
    private readonly _bottomSheet: MatBottomSheet
  ) {}

  public ngOnInit(): void {
    this.subscriptions.push(
      this.adsFacade.adsLoadingComplete$.pipe(filter(Boolean)).subscribe(() => (this.loading[0] = false))
    );
    this.subscriptions.push(
      this.regionsFacade.regionsLoadingComplete$.pipe(filter(Boolean)).subscribe(() => (this.loading[1] = false))
    );

    if (!localStorage.getItem('t&c')) {
      setTimeout(() => {
        this._bottomSheet.open(BottomSheetComponent);
      }, 3000);
    }
    // Get IAM service credentials for guest access
    Auth.currentCredentials();

    // Store the cognito user
    this.authService.storeCurrentAuthenticatedUser();

    // Load various entities that the app relies on upon initial load
    this.loadEntities();
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  private loadEntities(): void {
    this.adsFacade.loadAds(environment.defaultAppSyncMaxPaginationLimit, null);
    this.regionsFacade.loadRegions(environment.defaultAppSyncMaxPaginationLimit, null);
  }

  @HostListener('window:scroll')
  checkScroll() {
    // Scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition >= this.topPosToStartShowing) {
      this.shown = true;
    } else {
      this.shown = false;
    }
  }

  public scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
}
