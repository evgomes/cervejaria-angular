import { NgRedux } from "@angular-redux/store";
import { Injectable } from "@angular/core";
import { handleSignInUser, handleSignOutUser } from "src/store/actions";
import { IState } from "./../../store/state";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private ngRedux: NgRedux<IState>) {}

  login(email: string, password: string) {
    /* Aqui iria no backend para fazer as validações dos dados do usuário e receberia um token em caso de sucesso, e provavelmente guardaria o token no
     * localstorage. Como para esse teste estou usando Redux, apenas dou dispatch em uma action, e o reducer da aplicação seta o usuário no state.
     */

    const user = { email };
    this.ngRedux.dispatch(handleSignInUser(user));
  }

  logout() {
    this.ngRedux.dispatch(handleSignOutUser());
  }
}
