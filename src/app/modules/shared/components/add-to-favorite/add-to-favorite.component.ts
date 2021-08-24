import { EventEmitter, Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-to-favorite',
  templateUrl: './add-to-favorite.component.html',
  styleUrls: ['./add-to-favorite.component.sass'],
})
export class AddToFavorite {
  @Input() filled: boolean = false;
  @Input() loading: boolean = false;

  @Output() add: EventEmitter<void> = new EventEmitter();

  public readonly HEART_SIZE: number = 24;

  constructor() {}

  public onAdd(): void {
    this.add.emit();
  }
}
