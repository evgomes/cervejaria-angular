import { Component, Input } from "@angular/core";
import Beer from "src/app/models/beer";
import { BeersService } from "src/app/services/beers.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"]
})
export class ProductCardComponent {
  @Input("beer") beer: Beer;

  constructor(private beersService: BeersService, private toastService: ToastrService) {}

  excluir() {
    if (confirm("Deseja realmente excluir?")) {
      this.beersService.delete(this.beer.id);
      this.toastService.success("Excluído com sucesso!");
    }
  }
}
