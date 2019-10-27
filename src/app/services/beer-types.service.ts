import { IState } from "./../../store/state";
import { Injectable } from "@angular/core";
import { NgRedux } from "@angular-redux/store";
import { handleFetchBeerTypesStart, handleFetchBeerTypesEnd } from "../../store/actions";
import BeerType from "../models/beer-type";

@Injectable({
  providedIn: "root"
})
export class BeerTypesService {
  constructor(private ngRedux: NgRedux<IState>) {}

  loadBeerTypes() {
    // Aqui simulo uma operação assíncrona no backend para carregar os tipos de cerveja.
    this.ngRedux.dispatch(handleFetchBeerTypesStart());

    // Fonte: https://www.hominilupulo.com.br/universo-da-cerveja/tipos-de-cerveja/
    const beerTypes: BeerType[] = [
      { id: 1, name: "Pilsner" },
      { id: 2, name: "American Lager" },
      { id: 3, name: "Premium Lager" },
      { id: 4, name: "IPA" },
      { id: 5, name: "Helles" },
      { id: 6, name: "Dortmunder Export" },
      { id: 7, name: "Malzbier" },
      { id: 8, name: "Pale Ale" }
    ];

    this.ngRedux.dispatch(handleFetchBeerTypesEnd(beerTypes));
  }
}
