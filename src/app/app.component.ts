import { Component } from '@angular/core';
import { AuthService } from './modules/core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'AutoTrader';

  constructor(private readonly authService: AuthService) {}

  public ngOnInit(): void {
    // Store the cognito user
    this.authService.storeCurrentAuthenticatedUser();
  }
}
