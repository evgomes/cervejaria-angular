import { Component } from "@angular/core";
import UriPartial from "src/app/core/models/uri-partial";

@Component({
  selector: "product-form-page",
  templateUrl: "./product-form-page.component.html",
  styleUrls: ["./product-form-page.component.scss"]
})
export class ProductFormPageComponent {
  uriPartials: UriPartial[] = [{ title: "Lista de cervejas", link: "/produtos", active: false }, { title: "Nova cerveja", link: "/produtos/novo", active: true }];
}
