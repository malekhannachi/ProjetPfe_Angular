import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TeacherService } from '../services/teacher.service';

@Injectable({
  providedIn: 'root'
})
export class AuthTeacherGuard implements CanActivateChild {
  constructor(private ts: TeacherService, private route: Router) {}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
     
      if (localStorage.getItem('TokenTeacher')) {
        return true;
      } else {
        this.route.navigate(['teacher/auth-teacher']);
        return false;
      }
  }
  
}
