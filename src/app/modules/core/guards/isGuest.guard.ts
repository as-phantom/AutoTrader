import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthFacade } from '../../../store/facades/auth.facade';

@Injectable({
  providedIn: 'root',
})
export class IsGuestGuard implements CanActivate {
  constructor(private readonly authFacade: AuthFacade) {}

  canActivate() {
    return this.authFacade.currentAuthenticatedUser$.pipe(
      map((currentAuthenticatedUser) => {
        // User is guest
        if (!currentAuthenticatedUser) {
          return true;
        } else {
          // If user is authenticated reload the page to indicate that the app is not frozen
          window.location.reload();
          return false;
        }
      })
    );
  }
}
