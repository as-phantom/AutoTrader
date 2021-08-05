import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthFacade } from '../../../store/facades/auth.facade';

@Injectable({
  providedIn: 'root',
})
export class IsGuestGuard implements CanActivate {
  constructor(private readonly router: Router, private readonly authFacade: AuthFacade) {}

  canActivate() {
    return this.authFacade.currentAuthenticatedUser$.pipe(
      map((currentAuthenticatedUser) => {
        // User is guest
        if (!currentAuthenticatedUser) {
          return true;
        } else {
          // If user is authenticated reload the page to indicate that the app is not frozen
          this.router.navigate([this.router.url]);
          return false;
        }
      })
    );
  }
}
