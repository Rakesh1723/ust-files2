import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { shortenPipeGuard } from './shorten-pipe.guard';

describe('shortenPipeGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => shortenPipeGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
