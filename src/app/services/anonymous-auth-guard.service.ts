import { Injectable } from "@angular/core";
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { AuthService } from "./auth-service.service";

@Injectable({
  providedIn: "root"
})
export class AnonymousAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.user == null) {
      return true;
    }

    this.router.navigate(["/produtos"]);
    return false;
  }
}
