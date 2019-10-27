import { IState, INITIAL_STATE } from "./state";
import { SIGNIN_USER, SIGNOUT_USER, ADD_BEER, EDIT_BEER, REMOVE_BEER, FETCH_BEERS_START, FETCH_BEERS_END, FETCH_BEER_TYPES_START, FETCH_BEER_TYPES_END } from "./actions";

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
    case EDIT_BEER:
      return handleEditBeer(state, action.id, action.beer);
    case REMOVE_BEER:
      return handleRemoveBeer(state, action.id);
    case FETCH_BEERS_START:
      return handleFetchBeersStart(state);
    case FETCH_BEERS_END:
      return handleFetchBeersEnd(state, action.beers);
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
  const beerToAdd = Object.assign({}, beer);

  // Fake ID autoincrement
  if (state.beers && state.beers.length > 0) {
    beerToAdd.id = state.beers[state.beers.length - 1].id + 1;
  } else {
    beerToAdd.id = 1;
  }

  const beers = Object.assign([], state.beers);
  beers.push(beerToAdd);

  return {
    ...state,
    beers
  };
}

function handleEditBeer(state: IState, id: number, beer: Beer): IState {
  const beerToUpdate = Object.assign({}, beer);
  beerToUpdate.id = id; // Garanto que é o memso ID

  const beers = Object.assign([], state.beers).map(b => {
    return b.id === id ? beerToUpdate : b;
  });

  return {
    ...state,
    beers
  };
}

function handleRemoveBeer(state: IState, id: number): IState {
  const beers = Object.assign([], state.beers).filter(b => b.id !== id);

  return {
    ...state,
    beers
  };
}

function handleFetchBeersStart(state: IState): IState {
  return {
    ...state,
    beers: []
  };
}

function handleFetchBeersEnd(state: IState, beers: Beer[]): IState {
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

function handleFetchBeerTypesEnd(state: IState, beerTypes: BeerType[]): IState {
  return {
    ...state,
    beerTypes
  };
}
