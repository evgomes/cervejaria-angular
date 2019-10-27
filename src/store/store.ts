import { Store, createStore } from "redux";
import { IState } from "./state";
import rootReducer from "./reducer";

// Aqui crio a store da aplicação. Como o exemplo é todo em memória, sem backend, persisto o estado para o localstorage e recarrego, para evitar perda
// do estado ao acessar uma URL diretamente pelo browser.
const persistedState = localStorage.getItem("reduxState") ? JSON.parse(localStorage.getItem("reduxState")) : {};

export const store: Store<IState> = createStore(rootReducer, persistedState);

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});
