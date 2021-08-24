import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ad, User } from 'src/API';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { take } from 'rxjs/operators';
import {
  faMapMarkerAlt,
  faHeartbeat,
  faPhone,
  faPen,
  faTrash,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { AdsService } from 'src/app/modules/core/services/ads.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ad-card-big',
  templateUrl: './ad-card-big.component.html',
  styleUrls: ['./ad-card-big.component.sass'],
})
export class AdCardBigComponent implements OnInit {
  @Input() ad: Ad | null | undefined;
  @Input() user$: Observable<User | undefined> | undefined;

  public pictures: { path: string }[] | undefined;
  public borderRadius: number = 10;
  public cellsToShow: number = 1;

  public get faMapMarker(): IconDefinition {
    return faMapMarkerAlt;
  }

  public get faHeartbeat(): IconDefinition {
    return faHeartbeat;
  }

  public get faPhone(): IconDefinition {
    return faPhone;
  }

  public get faPen(): IconDefinition {
    return faPen;
  }

  public get faTrash(): IconDefinition {
    return faTrash;
  }

  constructor(
    private readonly matDialog: MatDialog,
    private readonly adsService: AdsService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    if (this.ad) {
      this.pictures = [{ path: this.ad.picture }];
      this.ad.pictures?.items?.forEach((p) => this.pictures?.push({ path: p!.url }));
    }
  }

  public onDelete(id: string): void {
    const modal = this.matDialog.open(ConfirmDialogComponent, {
      data: { message: 'Are you sure you want to delete this ad?' },
      minHeight: 150,
    });

    modal.componentInstance.confirm.pipe(take(1)).subscribe(() => {
      this.adsService
        .deleteAd(this.ad!.id)
        .pipe(take(1))
        .subscribe(() => this.router.navigate(['user/ads/my-ads']));
    });
  }
}
