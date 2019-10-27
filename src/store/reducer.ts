import { IState, INITIAL_STATE } from "./state";
import { SIGNIN_USER, SIGNOUT_USER, ADD_BEER, FETCH_BEER_TYPES_START, FETCH_BEER_TYPES_END } from "./actions";

import Beer from "../app/models/beer";
import BeerType from "src/app/models/beer-type";
import User from "src/app/models/user";

export default function rootReducer(state: IState = INITIAL_STATE, action) {
  console.log("state", state);

  switch (action.type) {
    case SIGNIN_USER:
      return handleSignInUser(state, action.user);
    case SIGNOUT_USER:
      return handleSignOutUser(state);
    case ADD_BEER:
      return handleAddBeer(state, action.beer);
    case FETCH_BEER_TYPES_START:
      return handleFetchBeerTypesStart(state);
    case FETCH_BEER_TYPES_END:
      return handleFetchBeerTypesEnd(state, action.beerTypes);
    default:
      return state;
  }
}

function handleSignInUser(state: IState, user: User): IState {
  const newUser = Object.assign({}, user);

  return {
    ...state,
    user: newUser
  };
}

function handleSignOutUser(state: IState): IState {
  return {
    ...state,
    user: null
  };
}

function handleAddBeer(state: IState, beer: Beer): IState {
  const beers = Object.assign([], state.beers);
  beers.push(beer);

  return {
    ...state,
    beers
  };
}

function handleFetchBeerTypesStart(state: IState): IState {
  return {
    ...state,
    beerTypes: []
  };
}

function handleFetchBeerTypesEnd(state: IState, beerTypes: [BeerType]): IState {
  return {
    ...state,
    beerTypes
  };
}
