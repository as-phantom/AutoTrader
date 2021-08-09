import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './modules/core/services/auth.service';
import { RegionsFacade } from './store/facades/regions.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'AutoTrader';

  constructor(private readonly authService: AuthService, private readonly regionsFacade: RegionsFacade) {}

  public ngOnInit(): void {
    // Store the cognito user
    this.authService.storeCurrentAuthenticatedUser();

    // Load various entities that the app relies on upon initial load
    this.loadEntities();
  }

  private loadEntities(): void {
    this.regionsFacade.loadRegions(environment.defaultAppSyncMaxPaginationLimit, null);
  }
}
