import { Component } from '@angular/core';
import { faQuestionCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.sass'],
})
export class NotFoundComponent {
  public get faQuestion(): IconDefinition {
    return faQuestionCircle;
  }

  constructor() {}
}
