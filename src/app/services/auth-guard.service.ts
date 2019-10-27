import { map } from "rxjs/operators";
import { select } from "@angular-redux/store";
import { Injectable } from "@angular/core";
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import User from "../models/user";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  @select(s => s.user) user$: Observable<User>;

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.user$.pipe(
      map(user => {
        if (user != null) {
          return true;
        }

        this.router.navigate(["/login"]);
        return false;
      })
    );
  }
}
