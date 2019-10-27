import { Router } from "@angular/router";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuthService } from "src/app/services/auth-service.service";
import { Subscription, Observable } from "rxjs";
import { select } from "@angular-redux/store";
import User from "src/app/models/user";

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit, OnDestroy {
  @select(s => s.user) user$: Observable<User>;
  userSubscription: Subscription;

  isCollapsed: boolean = false;
  loggedIn: boolean = false;
  userToDisplay: string = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.userSubscription = this.user$.subscribe(user => {
      this.loggedIn = user != null;
      this.userToDisplay = user ? user.email : null;
    });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  onCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/"]);
  }
}
