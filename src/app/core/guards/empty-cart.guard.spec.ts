import { TestBed } from '@angular/core/testing';

import { EmptyCartGuard } from './empty-cart.guard';

describe('EmptyCartGuard', () => {
  let guard: EmptyCartGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmptyCartGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
