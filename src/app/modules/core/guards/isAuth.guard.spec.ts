import { TestBed } from '@angular/core/testing';

import { IsAuthGuard } from './isAuth.guard';

describe('IsAuthGuard', () => {
  let guard: IsAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
