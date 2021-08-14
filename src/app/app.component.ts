import { Component } from '@angular/core';
import { Auth } from 'aws-amplify';
import { combineLatest, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthService } from './modules/core/services/auth.service';
import { AdsFacade } from './store/facades/ads.facade';
import { RegionsFacade } from './store/facades/regions.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'AutoTrader';
  private readonly subscriptions: Subscription[] = [];
  public latestAdsLoadingComplete: boolean = false;
  public regionsLoadingComplete: boolean = false;
  public makesLoadingComplete: boolean = false;

  constructor(
    private readonly authService: AuthService,
    private readonly regionsFacade: RegionsFacade,
    private readonly adsFacade: AdsFacade
  ) {}

  public ngOnInit(): void {
    this.subscriptions.push(
      this.adsFacade.adsLoadingComplete$.pipe(filter(Boolean)).subscribe(() => (this.makesLoadingComplete = true))
    );

    this.subscriptions.push(
      this.regionsFacade.regionsLoadingComplete$.pipe(filter(Boolean)).subscribe(() => (this.regionsLoadingComplete = true))
    );

    // Get IAM service credentials for guest access
    Auth.currentCredentials();

    // Store the cognito user
    this.authService.storeCurrentAuthenticatedUser();

    // Load various entities that the app relies on upon initial load
    this.loadEntities();
  }

  private loadEntities(): void {
    this.regionsFacade.loadRegions(environment.defaultAppSyncMaxPaginationLimit, null);
    this.adsFacade.loadAds(environment.defaultAppSyncMaxPaginationLimit, null);
  }
}
