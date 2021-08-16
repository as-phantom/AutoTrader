import { Component, OnInit } from '@angular/core';
import { faInfoCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-no-results',
  templateUrl: './no-results.component.html',
  styleUrls: ['./no-results.component.sass'],
})
export class NoResultsComponent implements OnInit {
  public get faInfoIcon(): IconDefinition {
    return faInfoCircle;
  }

  constructor() {}

  ngOnInit(): void {}
}
