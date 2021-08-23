import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToFavorite } from './add-to-favorite.component';

describe('FavoriteComponent', () => {
  let component: AddToFavorite;
  let fixture: ComponentFixture<AddToFavorite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddToFavorite],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToFavorite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
