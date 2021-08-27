import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAndEditAdComponent } from './create-and-edit-ad.component';

describe('CreateAdComponent', () => {
  let component: CreateAndEditAdComponent;
  let fixture: ComponentFixture<CreateAndEditAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAndEditAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAndEditAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
