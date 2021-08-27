import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.sass'],
})
export class BottomSheetComponent implements OnInit {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: { names: string[] }
  ) {}

  ngOnInit(): void {}

  agreeAndClose(): void {
    localStorage.setItem('t&c', 'agreed');
    this._bottomSheetRef.dismiss();
  }
}
