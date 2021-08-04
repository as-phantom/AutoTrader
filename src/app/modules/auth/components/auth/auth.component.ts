import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { Auth } from 'aws-amplify';
import { Subscription } from 'rxjs';
import { filter, switchMap, take } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';
import { AuthFacade } from '../../../../store/facades/auth.facade';
import { SocialType } from '../../../shared/enums/socialType.enum';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass'],
})
export class AuthComponent implements OnInit, OnDestroy {
  private readonly subscriptions: Subscription[] = [];

  public socialType = SocialType;

  constructor(private readonly authFacade: AuthFacade, private readonly router: Router) {}

  public ngOnInit(): void {
    this.subscriptions.push(
      this.authFacade.currentAuthenticatedUser$
        .pipe(
          filter(Boolean),
          switchMap(() => this.authFacade.redirectUrl$.pipe(take(1)))
        )
        .subscribe((redirectUrl) => {
          if (redirectUrl) {
            this.router.navigate([redirectUrl]);
            this.authFacade.setRedirectUrl(undefined);
          } else {
            this.router.navigate([environment.defaultRedirectUrl]);
          }
        })
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  public federatedLogin(): void {
    Auth.federatedSignIn();
  }

  public googleLogin(): void {
    Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Google,
    });
  }

  public facebookLogin(): void {
    Auth.federatedSignIn({
      provider: CognitoHostedUIIdentityProvider.Facebook,
    });
  }
}
