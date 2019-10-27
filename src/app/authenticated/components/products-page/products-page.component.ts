import { Observable } from "rxjs";
import { Component } from "@angular/core";
import UriPartial from "src/app/core/models/uri-partial";
import { select } from "@angular-redux/store";
import Beer from "src/app/models/beer";

@Component({
  selector: "products-page",
  templateUrl: "./products-page.component.html",
  styleUrls: ["./products-page.component.scss"]
})
export class ProductsPageComponent {
  uriPartials: UriPartial[] = [{ title: "Lista de cervejas", link: "/produtos", active: true }];
  @select(s => s.beers) beers$: Observable<Beer>;
}
