import { Component, Input } from "@angular/core";
import UriPartial from "../../../core/models/uri-partial";

@Component({
  selector: "breadcrumb",
  templateUrl: "./breadcrumb.component.html",
  styleUrls: ["./breadcrumb.component.scss"]
})
export class BreadcrumbComponent {
  @Input("partials") uriPartials: UriPartial[] = [];
}
