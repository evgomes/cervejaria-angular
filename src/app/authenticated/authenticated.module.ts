import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ProductsPageComponent } from "./components/products-page/products-page.component";
import { CoreModule } from "../core/core.module";
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { ProductFormPageComponent } from "./components/product-form-page/product-form-page.component";
import { ProductFormComponent } from "./components/product-form/product-form.component";
import { NgxMaskModule } from "ngx-mask";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [ProductsPageComponent, ProductCardComponent, ProductFormPageComponent, ProductFormComponent],
  imports: [CommonModule, NgbModule, CoreModule, FormsModule, NgxMaskModule.forChild(), RouterModule.forChild([])]
})
export class AuthenticatedModule {}
