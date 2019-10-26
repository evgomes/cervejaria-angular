import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";
import User from "../models/user";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  public get user(): User {
    const user = localStorage.getItem("user");

    if (user == null) {
      return null;
    }

    return { email: user };
  }

  login(email: string, password: string): Observable<User> {
    /* Aqui iria no backend para fazer as validações dos dados do usuário e receberia um token em caso de sucesso.
     * Para o exemplo, apenas seto no localstorage os dados do usuário como se tivesse funcionado a autenticação, sem um token, e
     * retorno uma Observable simulando a operação assíncrona.
     */
    localStorage.setItem("user", email);

    const user = { email };
    return of(user);
  }

  logout() {
    localStorage.removeItem("user");
  }
}
