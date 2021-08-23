import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthFacade } from 'src/app/store/facades/auth.facade';

@Injectable({
  providedIn: 'root',
})
export class SetRedirect implements CanActivate {
  constructor(private readonly authFacade: AuthFacade, private readonly router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    this.authFacade.setRedirectUrl(this.router.url);
    return true;
  }
}
