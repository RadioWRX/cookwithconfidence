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
import { AzerbaijanComponent } from './azerbaijan/azerbaijan.component';
import { BahamasComponent } from './bahamas/bahamas.component';
import { BahrainComponent } from './bahrain/bahrain.component';
import { BangladeshComponent } from './bangladesh/bangladesh.component';
import { BarbadosComponent } from './barbados/barbados.component';
import { BelarusComponent } from './belarus/belarus.component';
import { BelgiumComponent } from './belgium/belgium.component';
import { BelizeComponent } from './belize/belize.component';
import { BeninComponent } from './benin/benin.component';
import { BhutanComponent } from './bhutan/bhutan.component';
import { BoliviaComponent } from './bolivia/bolivia.component';
import { BosniaHerzegovinaComponent } from './bosnia-herzegovina/bosnia-herzegovina.component';
import { BotswanaComponent } from './botswana/botswana.component';
import { BrazilComponent } from './brazil/brazil.component';
import { BruneiComponent } from './brunei/brunei.component';
import { BulgariaComponent } from './bulgaria/bulgaria.component';
import { BurkinaFasoComponent } from './burkina-faso/burkina-faso.component';
import { BurundiComponent } from './burundi/burundi.component';

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
    AustriaComponent,
    AzerbaijanComponent,
    BahamasComponent,
    BahrainComponent,
    BangladeshComponent,
    BarbadosComponent,
    BelarusComponent,
    BelgiumComponent,
    BelizeComponent,
    BeninComponent,
    BhutanComponent,
    BoliviaComponent,
    BosniaHerzegovinaComponent,
    BotswanaComponent,
    BrazilComponent,
    BruneiComponent,
    BulgariaComponent,
    BurkinaFasoComponent,
    BurundiComponent
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
