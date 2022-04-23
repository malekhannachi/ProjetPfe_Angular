import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../services/admin.service';

@Injectable({
  providedIn: 'root',
})
export class AuthAdminGuard implements CanActivate {
  constructor(private adminService: AdminService, private route: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>    | boolean  | UrlTree {
    let isLoggedInAdmin = this.adminService.isLoggedInAdmin();
    if (isLoggedInAdmin) {
      return true;
    } else {
      this.route.navigate(['/auth-admin']);
      return false;
    }
  }
}
