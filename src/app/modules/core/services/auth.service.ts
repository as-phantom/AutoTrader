import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { AuthFacade } from '../../../store/facades/auth.facade';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly authFacade: AuthFacade) {}

  public async storeCurrentAuthenticatedUser(): Promise<void> {
    try {
      const currentAuthenticatedUser: any = await Auth.currentAuthenticatedUser();

      // Need to deep copy the object because of @ngrx/store freeze error
      this.authFacade.setCurrentAuthenticatedUser(JSON.parse(JSON.stringify(currentAuthenticatedUser)));
    } catch (e) {
      this.authFacade.setCurrentAuthenticatedUser(undefined);
    }
  }
}
