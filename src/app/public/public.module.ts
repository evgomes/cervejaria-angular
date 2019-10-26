import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { LoginPageComponent } from "./components/login-page/login-page.component";

@NgModule({
  declarations: [LoginFormComponent, LoginPageComponent],
  imports: [CommonModule, NgbModule, FormsModule],
  exports: [LoginFormComponent, LoginPageComponent]
})
export class PublicModule {}
