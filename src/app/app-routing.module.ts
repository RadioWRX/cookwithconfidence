import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AfghanistanComponent } from './afghanistan/afghanistan.component';
import { AlbaniaComponent } from './albania/albania.component';
import { AlgeriaComponent } from './algeria/algeria.component';
import { AndorraComponent } from './andorra/andorra.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'afghanistan', component: AfghanistanComponent },
  { path: 'albania', component: AlbaniaComponent },
  { path: 'algeria', component: AlgeriaComponent },
  { path: 'andorra', component: AndorraComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
