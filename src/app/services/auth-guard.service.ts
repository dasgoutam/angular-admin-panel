import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));

    console.log("user2-", route.data.roles);
    if (currentUser == null) {
      // Unauth user
      this._router.navigate(['/login']);
      return false;
    }
    else {
      // Authenticated user
      // Check for roles
      let user_role = currentUser.type;
      if (user_role =='student' || user_role == 'teacher') {
        user_role = 'nonadmin';
      }
      user_role = [user_role];
      let result = route.data.roles.some( ai => user_role.includes(ai));
      if (result == true) {
        return true;
      }
      else {
        this._router.navigate(['/unauth']);
        return false;
      }
  
    }
  }
}
