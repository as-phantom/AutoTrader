import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { faMapMarkerAlt, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Ad, User } from 'src/API';
import { filter } from 'rxjs/operators';

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

  public arrowsOutside: boolean = true;
  public pauseOnHover: boolean = true;
  public autoplay: boolean = true;
  public loop: boolean = true;
  public height: number = window.innerHeight * 0.25;
  public autoplayInterval: number = 4000;
  public transitionDuration: number = 500;
  public borderRadius: number = 10;
  public cellsToShow: number = 3;

  constructor() {}

  ngOnInit(): void {}
}
