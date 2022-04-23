import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TeacherService } from '../services/teacher.service';

@Injectable({
  providedIn: 'root'
})
export class AuthTeacherGuard implements CanActivate {
  constructor(private ts: TeacherService, private route: Router) {}
 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    


      let isLoggedInTeacher = this.ts.isLoggedInTeacher();
      if (isLoggedInTeacher) {
        return true;
      } else {
        this.route.navigate(['auth-admin']);
        return false;
      }
  }
  
}
