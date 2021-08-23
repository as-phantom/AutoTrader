import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-favorite',
  templateUrl: './add-to-favorite.component.html',
  styleUrls: ['./add-to-favorite.component.sass'],
})
export class AddToFavorite implements OnInit {
  @Input() filled: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
