import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { faMapMarkerAlt, faHeartbeat, faPhone, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Ad, User } from 'src/API';

@Component({
  selector: 'app-ad-card-big',
  templateUrl: './ad-card-big.component.html',
  styleUrls: ['./ad-card-big.component.sass'],
})
export class AdCardBigComponent implements OnInit {
  @Input() ad$: Observable<Ad | null> | undefined;
  @Input() user$: Observable<User | undefined> | undefined;

  public get faMapMarker(): IconDefinition {
    return faMapMarkerAlt;
  }

  public get faHeartbeat(): IconDefinition {
    return faHeartbeat;
  }

  public get faPhone(): IconDefinition {
    return faPhone;
  }

  constructor() {}

  ngOnInit(): void {}
}
