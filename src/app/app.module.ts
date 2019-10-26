import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { PublicModule } from "./public/public.module";
import { AuthenticatedModule } from "./authenticated/authenticated.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, PublicModule, AuthenticatedModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
