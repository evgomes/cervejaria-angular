import { Component } from "@angular/core";
import UriPartial from "src/app/core/models/uri-partial";

@Component({
  selector: "products-page",
  templateUrl: "./products-page.component.html",
  styleUrls: ["./products-page.component.scss"]
})
export class ProductsPageComponent {
  uriPartials: UriPartial[] = [{ title: "Lista de cervejas", link: "/produtos", active: true }];
}
