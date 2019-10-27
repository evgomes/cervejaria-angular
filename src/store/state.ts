import Beer from "../app/models/user";
import BeerType from "src/app/models/beer-type";
import User from "../app/models/user";

export interface IState {
  user: User;
  beers: [Beer?];
  beerTypes: [BeerType?];
}

export const INITIAL_STATE: IState = {
  user: null,
  beers: [],
  beerTypes: []
};
