import { Component } from '@angular/core';
import { faFacebook, faYoutube, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass'],
})
export class FooterComponent {
  public get faFacebook(): IconDefinition {
    return faFacebook;
  }
  public get faYoutube(): IconDefinition {
    return faYoutube;
  }
  public get faEnvelope(): IconDefinition {
    return faEnvelope;
  }

  constructor() {}
}
