import { TestBed } from '@angular/core/testing';

import { SetRedirect } from './setRedirect.guard';

describe('SetRedirect', () => {
  let guard: SetRedirect;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SetRedirect);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
