import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";

@NgModule({
  declarations: [NavbarComponent, BreadcrumbComponent],
  imports: [CommonModule, NgbModule],
  exports: [NavbarComponent, BreadcrumbComponent]
})
export class CoreModule {}
