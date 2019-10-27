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
  subscription: Subscription;

  isCollapsed: boolean = false;
  loggedIn: boolean = false;
  userToDisplay: string = null;

  constructor() {}

  ngOnInit() {
    this.subscription = this.user$.subscribe(user => {
      console.log("nav user", user);

      if (user != null) {
        this.loggedIn = true;
        this.userToDisplay = user.email;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
