import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialFabIconComponent } from './social-fab-icon.component';

describe('SocialFabIconComponent', () => {
  let component: SocialFabIconComponent;
  let fixture: ComponentFixture<SocialFabIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialFabIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialFabIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
