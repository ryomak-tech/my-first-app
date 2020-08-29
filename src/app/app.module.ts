import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppBoostrapModule } from "./app-bootstrap/app-bootstrap.module";
import { NavbarComponent } from "./common/navbar/navbar.component";
import { AppRoutingModule } from ".//app-routing.module";

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [BrowserModule, AppBoostrapModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
