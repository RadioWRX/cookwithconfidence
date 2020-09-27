import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfghanistanComponent } from './afghanistan/afghanistan.component';
import { HomeComponent } from './home/home.component';
import { AlbaniaComponent } from './albania/albania.component';

@NgModule({
  declarations: [
    AppComponent,
    AfghanistanComponent,
    HomeComponent,
    AlbaniaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
