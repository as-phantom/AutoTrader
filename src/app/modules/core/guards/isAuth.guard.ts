import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthFacade } from '../../../store/facades/auth.facade';
import { NotificationService } from '../services/notifications.service';

@Injectable({
  providedIn: 'root',
})
export class IsAuthGuard implements CanActivate {
  constructor(private readonly router: Router, private readonly authFacade: AuthFacade) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authFacade.currentAuthenticatedUser$.pipe(
      map((currentAuthenticatedUser) => {
        // User is logged in
        if (currentAuthenticatedUser) {
          return true;
        } else {
          this.authFacade.setRedirectUrl(state.url);
          this.router.navigate(['/auth']);
          return false;
        }
      })
    );
  }
}
