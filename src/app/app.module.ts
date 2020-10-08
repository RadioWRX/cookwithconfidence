import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfghanistanComponent } from './afghanistan/afghanistan.component';
import { HomeComponent } from './home/home.component';
import { AlbaniaComponent } from './albania/albania.component';
import { AlgeriaComponent } from './algeria/algeria.component';
import { AndorraComponent } from './andorra/andorra.component';
import { AngolaComponent } from './angola/angola.component';
import { AntiguaComponent } from './antigua/antigua.component';
import { ArgentinaComponent } from './argentina/argentina.component';
import { ArmeniaComponent } from './armenia/armenia.component';
import { DishesComponent } from './dishes/dishes.component';
import { DessertsComponent } from './desserts/desserts.component';
import { AustraliaComponent } from './australia/australia.component';
import { AustriaComponent } from './austria/austria.component';

@NgModule({
  declarations: [
    AppComponent,
    AfghanistanComponent,
    HomeComponent,
    AlbaniaComponent,
    AlgeriaComponent,
    AndorraComponent,
    AngolaComponent,
    AntiguaComponent,
    ArgentinaComponent,
    ArmeniaComponent,
    DishesComponent,
    DessertsComponent,
    AustraliaComponent,
    AustriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
