import { CanActivateFn } from '@angular/router';

export const shortenPipeGuard: CanActivateFn = (route, state) => {
  return true;
};
