import { EventEmitter, Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-to-favorite',
  templateUrl: './add-to-favorite.component.html',
  styleUrls: ['./add-to-favorite.component.sass'],
})
export class AddToFavorite implements OnInit {
  public readonly HEART_SIZE: number = 24;

  @Input() filled: boolean = false;
  @Input() loading: boolean = false;

  @Output() add: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public onAdd(): void {
    this.add.emit();
  }
}
