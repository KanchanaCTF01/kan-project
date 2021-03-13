import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './home/navbar/navbar.component';
import { SearchBarComponent } from './home/navbar/searchbar/searchbar.component';
import { TopBannerComponent } from './home/topbanner/topbanner.component';
import { CategoryMenuComponent } from './home/categorymenu/categorymenu.component';


@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    NavbarComponent,
    SearchBarComponent,
    TopBannerComponent,
    CategoryMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
