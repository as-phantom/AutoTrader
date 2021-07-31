import { Component } from '@angular/core';
import { Auth } from 'aws-amplify';

import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'AutoTrader';

  ngOnInit() {
    Auth.currentAuthenticatedUser().then(console.log).catch(console.error);
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
