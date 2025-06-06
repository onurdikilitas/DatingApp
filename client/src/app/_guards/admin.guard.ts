import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AccountsService } from '../_services/accounts.service';
import { ToastrService } from 'ngx-toastr';

export const adminGuard: CanActivateFn = (route, state) => {
  const accountsService = inject(AccountsService);
  const toastr = inject(ToastrService);

  if (accountsService.roles().includes('Admin') || accountsService.roles().includes('Moderator')) {
    return true;
  } else {
    toastr.error('You cannot enter this area');
    return false;
  }
};
