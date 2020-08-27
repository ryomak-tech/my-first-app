import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppBoostrapModule } from "./app-bootstrap/app-bootstrap.module";
import { NavbarComponent } from "./common/navbar/navbar.component";

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [BrowserModule, AppBoostrapModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
