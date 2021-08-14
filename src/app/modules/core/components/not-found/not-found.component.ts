import { Component, OnInit } from '@angular/core';
import { faQuestionCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.sass'],
})
export class NotFoundComponent implements OnInit {
  public get faQuestion(): IconDefinition {
    return faQuestionCircle;
  }

  constructor() {}

  ngOnInit(): void {}
}
