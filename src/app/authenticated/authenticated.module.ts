import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ProductsPageComponent } from "./components/products-page/products-page.component";
import { CoreModule } from "../core/core.module";
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductFormPageComponent } from './components/product-form-page/product-form-page.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

@NgModule({
  declarations: [ProductsPageComponent, ProductCardComponent, ProductFormPageComponent, ProductFormComponent],
  imports: [CommonModule, NgbModule, CoreModule]
})
export class AuthenticatedModule {}
