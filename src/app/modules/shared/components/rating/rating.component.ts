import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.sass'],
})
export class RatingComponent {
  private readonly DEFAULT_MAX_RATING: number = 5;
  public readonly STAR_SIZE: number = 24;

  @Input() maxRating: number = this.DEFAULT_MAX_RATING;
  @Input() rating: number = 0;
  @Input() loading: boolean = false;

  @Output() rate: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnChanges(): void {
    if (this.rating > this.maxRating) {
      this.rating = this.maxRating;
    }
  }

  public get ratings(): number[] {
    return Array.from(new Array(this.maxRating), (_, i) => i);
  }

  public isFilled(rating: number): boolean {
    return this.maxRating - rating <= this.rating;
  }

  public onRate(rating: number): void {
    this.rate.emit(this.maxRating - rating);
  }
}
