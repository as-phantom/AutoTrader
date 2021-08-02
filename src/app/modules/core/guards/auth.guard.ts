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
        // user is not logged in
        if (!currentAuthenticatedUser) {
          // tries to access a protected route
          if (!state.url.startsWith('/auth')) {
            this.authFacade.setRedirectUrl(state.url);

            // navigate to /auth
            this.router.navigate(['/auth']);

            // dont allow access
            return false;
          } else {
            // tries to access /auth
            return true;
          }
        } else {
          // user is logged in

          if (state.url.startsWith('/auth')) {
            // redirect back the to route the user came from
            this.router.navigate([this.router.url]);

            // if user tries to access /auth - dont allow it
            return false;
          } else {
            // allow access to other protected routes
            return true;
          }
        }
      })
    );
  }
}
