import { EventEmitter, Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-to-favorite',
  templateUrl: './add-to-favorite.component.html',
  styleUrls: ['./add-to-favorite.component.sass'],
})
export class AddToFavorite {
  public readonly HEART_SIZE: number = 24;

  @Input() public filled: boolean = false;
  @Input() public loading: boolean = false;

  @Output() public readonly add: EventEmitter<void> = new EventEmitter();

  constructor() {}

  public onAdd(): void {
    this.add.emit();
  }
}
