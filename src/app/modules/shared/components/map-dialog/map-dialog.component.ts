import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-map-dialog',
  templateUrl: './map-dialog.component.html',
  styleUrls: ['./map-dialog.component.sass'],
})
export class MapDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public readonly data: { latitude: number; longitude: number },
    private readonly matDialogRef: MatDialogRef<ConfirmDialogComponent>
  ) {}

  public onClose(): void {
    this.matDialogRef.close();
  }
}
