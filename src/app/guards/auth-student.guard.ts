import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentService } from '../services/student.service';

@Injectable({
  providedIn: 'root'
})
export class AuthStudentGuard implements CanActivateChild {
  constructor(private ss: StudentService, private route: Router) {}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     let isLoggedInStudent=this.ss.isLoggedInStudent
      if (isLoggedInStudent()) {
        return true;
      } else {
        this.route.navigate(['student/auth-student']);
        return false;
      }
  }
  
  
}
