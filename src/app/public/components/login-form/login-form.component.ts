import { Component } from "@angular/core";
import { AuthService } from "src/app/services/auth-service.service";
import { Router } from "@angular/router";
import User from "src/app/models/user";

@Component({
  selector: "login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"]
})
export class LoginFormComponent {
  user: User = { email: "", password: "" };

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.user.email, this.user.password).subscribe(_ => {
      console.log("ok");
      this.router.navigate(["/produtos"]);
    });
  }
}
