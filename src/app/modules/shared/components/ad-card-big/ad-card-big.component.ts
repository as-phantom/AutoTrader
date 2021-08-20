import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  faMapMarkerAlt,
  faHeartbeat,
  faPhone,
  faEdit,
  faTrash,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { Ad, User } from 'src/API';

@Component({
  selector: 'app-ad-card-big',
  templateUrl: './ad-card-big.component.html',
  styleUrls: ['./ad-card-big.component.sass'],
})
export class AdCardBigComponent implements OnInit {
  @Input() ad$: Observable<Ad | null> | undefined;
  @Input() user$: Observable<User | undefined> | undefined;

  public pictures: { path: string }[] | undefined;
  public borderRadius: number = 10;
  public cellsToShow: number = 1;
  // public height: number = window.innerHeight * 0.25;

  public get faMapMarker(): IconDefinition {
    return faMapMarkerAlt;
  }

  public get faHeartbeat(): IconDefinition {
    return faHeartbeat;
  }

  public get faPhone(): IconDefinition {
    return faPhone;
  }

  public get faEdit(): IconDefinition {
    return faEdit;
  }

  public get faTrash(): IconDefinition {
    return faTrash;
  }

  constructor() {}

  ngOnInit(): void {
    this.ad$?.subscribe((ad) => {
      if (ad) {
        this.pictures = [{ path: ad.picture }];
        ad.pictures?.items?.forEach((p) => this.pictures?.push({ path: p!.url }));
      }
    });
  }
}
