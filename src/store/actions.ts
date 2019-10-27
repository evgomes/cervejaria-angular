import Beer from "../app/models/beer";
import BeerType from "src/app/models/beer-type";
import User from "src/app/models/user";

export const SIGNIN_USER = "SIGNIN_USER";
export const SIGNOUT_USER = "SIGNOUT_USER";

export const ADD_BEER = "ADD_BEER";

export const FETCH_BEER_TYPES_START = "FETCH_BEER_TYPES_START";
export const FETCH_BEER_TYPES_END = "FETCH_BEER_TYPES_END";

export function handleSignInUser(user: User) {
  return {
    type: SIGNIN_USER,
    user
  };
}

export function handleSignOutUser() {
  return {
    type: SIGNOUT_USER
  };
}

export function handleAddBeer(beer: Beer) {
  return {
    type: ADD_BEER,
    beer
  };
}

export function handleFetchBeerTypesStart() {
  return {
    type: FETCH_BEER_TYPES_START
  };
}

export function handleFetchBeerTypesEnd(beerTypes: [BeerType]) {
  return {
    type: FETCH_BEER_TYPES_END,
    beerTypes
  };
}
