import { Injectable } from "@angular/core";
import Beer from "../models/beer";
import { NgRedux } from "@angular-redux/store";
import { IState } from "src/store/state";
import { handleAddBeer, handleEditBeer, handleRemoveBeer } from "src/store/actions";

@Injectable({
  providedIn: "root"
})
export class BeersService {
  constructor(private ngRedux: NgRedux<IState>) {}

  add(beer: Beer) {
    this.ngRedux.dispatch(handleAddBeer(beer));
  }

  update(id: number, beer: Beer) {
    this.ngRedux.dispatch(handleEditBeer(id, beer));
  }

  delete(id: number) {
    this.ngRedux.dispatch(handleRemoveBeer(id));
  }
}
