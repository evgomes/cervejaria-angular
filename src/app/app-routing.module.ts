import { LoginPageComponent } from "./public/components/login-page/login-page.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsPageComponent } from "./authenticated/components/products-page/products-page.component";
import { ProductFormPageComponent } from "./authenticated/components/product-form-page/product-form-page.component";

const routes: Routes = [
  { path: "produtos/editar/:id", component: ProductFormPageComponent },
  { path: "produtos/novo", component: ProductFormPageComponent },
  { path: "produtos", component: ProductsPageComponent },
  { path: "", component: LoginPageComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
