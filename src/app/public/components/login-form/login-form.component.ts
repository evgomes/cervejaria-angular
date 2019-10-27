import { Observable, Subscription } from "rxjs";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth-service.service";
import { Router } from "@angular/router";
import User from "src/app/models/user";
import { select } from "@angular-redux/store";

@Component({
  selector: "login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"]
})
export class LoginFormComponent implements OnInit, OnDestroy {
  @select(s => s.user) user$: Observable<User>;
  subscription: Subscription;
  loggedIn: boolean = false;

  user: User = { email: "", password: "" };

  constructor(private authService: AuthService, private router: Router) {
    this.subscription = this.user$.subscribe(user => (this.loggedIn = user != null));
  }

  ngOnInit() {
    if (this.loggedIn) {
      this.router.navigate(["/produtos"]);
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  login() {
    this.authService.login(this.user.email, this.user.password);
    this.router.navigate(["/produtos"]);
  }
}
