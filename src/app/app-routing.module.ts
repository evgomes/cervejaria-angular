import { LoginPageComponent } from "./public/components/login-page/login-page.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsPageComponent } from "./authenticated/components/products-page/products-page.component";
import { ProductFormPageComponent } from "./authenticated/components/product-form-page/product-form-page.component";
import { AuthGuard } from "./services/auth-guard.service";

const routes: Routes = [
  { path: "produtos/editar/:id", component: ProductFormPageComponent, canActivate: [AuthGuard] },
  { path: "produtos/novo", component: ProductFormPageComponent, canActivate: [AuthGuard] },
  { path: "produtos", component: ProductsPageComponent, canActivate: [AuthGuard] },
  { path: "login", redirectTo: "" },
  { path: "", component: LoginPageComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
