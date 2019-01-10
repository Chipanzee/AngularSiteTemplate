import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule, MatSidenavModule, MatListModule, } from '@angular/material';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [AppComponent, MainNavComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, LayoutModule, MatToolbarModule, MatSidenavModule, MatListModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
