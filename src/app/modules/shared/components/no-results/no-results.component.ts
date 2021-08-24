import { Component, Input } from '@angular/core';
import { faInfoCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-no-results',
  templateUrl: './no-results.component.html',
  styleUrls: ['./no-results.component.sass'],
})
export class NoResultsComponent {
  @Input() sender: string | undefined;

  public get faInfoIcon(): IconDefinition {
    return faInfoCircle;
  }

  constructor() {}
}
