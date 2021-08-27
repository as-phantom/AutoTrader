import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.sass'],
})
export class BottomSheetComponent {
  constructor(private _bottomSheetRef: MatBottomSheetRef) {}

  agreeAndClose(): void {
    localStorage.setItem('t&c', 'agreed');
    this._bottomSheetRef.dismiss();
  }
}
