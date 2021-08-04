import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthFacade } from '../../../store/facades/auth.facade';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private readonly router: Router, private readonly authFacade: AuthFacade) {}

  canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authFacade.currentAuthenticatedUser$.pipe(
      map((currentAuthenticatedUser) => {
        // User is not logged in
        if (!currentAuthenticatedUser) {
          // Tries to access a protected route
          if (!state.url.startsWith('/auth')) {
            this.authFacade.setRedirectUrl(state.url);

            // Navigate to /auth
            this.router.navigate(['/auth']);

            // Dont allow access
            return false;
          } else {
            // Tries to access /auth
            return true;
          }
        } else {
          // User is logged in

          if (state.url.startsWith('/auth')) {
            // Redirect back the to route the user came from
            this.router.navigate([this.router.url]);

            // If user tries to access /auth - dont allow it
            return false;
          } else {
            // Allow access to other protected routes
            return true;
          }
        }
      })
    );
  }
}
