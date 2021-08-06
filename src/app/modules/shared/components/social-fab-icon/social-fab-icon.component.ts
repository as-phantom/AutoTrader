import { Component, Input, OnInit } from '@angular/core';
import { faFacebookF, faGooglePlusG, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { SocialType } from '../../enums/socialType.enum';

@Component({
  selector: 'app-social-fab-icon',
  templateUrl: './social-fab-icon.component.html',
  styleUrls: ['./social-fab-icon.component.sass'],
})
export class SocialFabIconComponent implements OnInit {
  @Input() public socialType: SocialType | undefined;

  constructor() {}

  public ngOnInit() {}

  public get faCircleIcon(): IconDefinition {
    return faCircle;
  }

  public get faIcon(): IconDefinition | undefined {
    switch (this.socialType) {
      case SocialType.FACEBOOK:
        return faFacebookF;
      case SocialType.GOOGLE:
        return faGooglePlusG;
      default:
        return;
    }
  }

  public get iconColor(): string | undefined {
    switch (this.socialType) {
      case SocialType.FACEBOOK:
        return '#4267B2';
      case SocialType.GOOGLE:
        return '#DB4437';
      default:
        return;
    }
  }
}
