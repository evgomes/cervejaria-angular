import { Component } from "@angular/core";

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent {
  isCollapsed: boolean = false;

  onCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
