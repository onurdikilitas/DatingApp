import { CanActivateFn } from '@angular/router';
import { AccountsService } from '../_services/accounts.service';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  const accountsService = inject(AccountsService);
  const toastr = inject(ToastrService);

  if (accountsService.currentUser()) {
    return true;
  } else {
    toastr.error('You shall not pass!');
    return false;
  }
  return true;
};
