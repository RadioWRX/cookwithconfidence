import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AfghanistanComponent } from './afghanistan/afghanistan.component';
import { AlbaniaComponent } from './albania/albania.component';
import { AlgeriaComponent } from './algeria/algeria.component';
import { AndorraComponent } from './andorra/andorra.component';
import { AngolaComponent } from './angola/angola.component';
import { AntiguaComponent } from './antigua/antigua.component';
import { ArgentinaComponent } from './argentina/argentina.component';
import { ArmeniaComponent } from './armenia/armenia.component';
import { DessertsComponent } from './desserts/desserts.component';
import { DishesComponent } from './dishes/dishes.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'afghanistan', component: AfghanistanComponent },
  { path: 'albania', component: AlbaniaComponent },
  { path: 'algeria', component: AlgeriaComponent },
  { path: 'andorra', component: AndorraComponent },
  { path: 'angola', component: AngolaComponent },
  { path: 'antigua', component: AntiguaComponent },
  { path: 'argentina', component: ArgentinaComponent },
  { path: 'armenia', component: ArmeniaComponent },
  { path: 'desserts', component: DessertsComponent },
  { path: 'dishes', component: DishesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
