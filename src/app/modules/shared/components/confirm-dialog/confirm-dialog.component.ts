import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.sass'],
})
export class ConfirmDialogComponent implements OnInit {
  @Output() public readonly confirm: EventEmitter<void> = new EventEmitter();

  constructor(
    @Inject(MAT_DIALOG_DATA) public readonly data: { message: string },
    private readonly matDialogRef: MatDialogRef<ConfirmDialogComponent>
  ) {}

  ngOnInit(): void {}

  public onCancel(): void {
    this.matDialogRef.close();
  }

  public onConfirm(): void {
    this.matDialogRef.close();
    this.confirm.emit();
  }
}
