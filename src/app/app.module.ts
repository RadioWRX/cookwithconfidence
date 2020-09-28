import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfghanistanComponent } from './afghanistan/afghanistan.component';
import { HomeComponent } from './home/home.component';
import { AlbaniaComponent } from './albania/albania.component';
import { AlgeriaComponent } from './algeria/algeria.component';
import { AndorraComponent } from './andorra/andorra.component';
import { AngolaComponent } from './angola/angola.component';
import { AntiguaComponent } from './antigua/antigua.component';

@NgModule({
  declarations: [
    AppComponent,
    AfghanistanComponent,
    HomeComponent,
    AlbaniaComponent,
    AlgeriaComponent,
    AndorraComponent,
    AngolaComponent,
    AntiguaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
