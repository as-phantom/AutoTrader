import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../../API';
import * as AuthActions from '../actions/auth.actions';
import * as fromRoot from '../reducers';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  public readonly currentAuthenticatedUser$ = this.store.select(fromRoot.getCurrentAuthenticatedUser);
  public readonly redirectUrl$ = this.store.select(fromRoot.getRedirectUrl);
  public readonly user$ = this.store.select(fromRoot.getUser);

  constructor(private readonly store: Store<fromRoot.State>) {}

  public setCurrentAuthenticatedUser(currentAuthenticatedUser: any | undefined): void {
    this.store.dispatch(AuthActions.setCurrentAuthenticatedUserAction({ payload: { currentAuthenticatedUser } }));
  }

  public setRedirectUrl(redirectUrl: string | undefined): void {
    this.store.dispatch(AuthActions.setRedirectUrlAction({ payload: { redirectUrl } }));
  }

  public setUser(user: User): void {
    this.store.dispatch(AuthActions.setUserAction({ payload: { user } }));
  }
}
