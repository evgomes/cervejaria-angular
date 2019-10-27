import { map } from "rxjs/operators";
import { Router } from "@angular/router";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BeersService } from "../../../services/beers.service";
import { BeerTypesService } from "../../../services/beer-types.service";
import Beer from "src/app/models/beer";
import BeerType from "src/app/models/beer-type";
import { select } from "@angular-redux/store";
import { Observable, Subscription } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.scss"]
})
export class ProductFormComponent implements OnInit, OnDestroy {
  @select(s => s.beerTypes) beerTypes$: Observable<BeerType[]>;
  @select(s => s.beers) beers$: Observable<Beer[]>;
  beersSubscription: Subscription;

  beerId: number = 0;
  beer: Beer = { id: 0, name: "", price: "", description: "", imageBase64: "", type: null };

  constructor(private beersService: BeersService, private beerTypesService: BeerTypesService, private route: ActivatedRoute, private router: Router, private toastService: ToastrService) {
    this.beerId = +this.route.snapshot.paramMap.get("id");
    this.beerTypesService.loadBeerTypes();
  }

  ngOnInit() {
    if (!this.beerId) return;

    this.beersSubscription = this.beers$.subscribe(beers => {
      this.beer = beers.find(b => b.id === this.beerId);

      if (!this.beer) {
        this.router.navigate(["/produtos"]);
      }
    });
  }

  ngOnDestroy() {
    if (this.beersSubscription) {
      this.beersSubscription.unsubscribe();
    }
  }

  onChangeImage($event) {
    // Como no exemplo não tenho um backend para fazer upload da imagem, leio a mesma como base64 e guardo na model, exibindo a imagem no campo
    // respectivo.
    const file: File = $event.target.files[0];
    if (!file.type.includes("image/")) {
      $event.target.value = null;
      this.beer.imageBase64 = "";
      return false;
    }

    const fileReader: FileReader = new FileReader();
    fileReader.onloadend = e => {
      this.beer.imageBase64 = fileReader.result.toString();
    };
    fileReader.readAsDataURL(file);
  }

  save() {
    if (this.beerId > 0) {
      this.beersService.update(this.beerId, this.beer);
    } else {
      this.beersService.add(this.beer);
    }

    this.toastService.success("Salvo com sucesso!");
    this.router.navigate(["/produtos"]);
  }
}
