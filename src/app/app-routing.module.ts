import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//This section deals with the routing for all national recipes by country.
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
import { AustraliaComponent } from './australia/australia.component';
import { AustriaComponent } from './austria/austria.component';

// This section deals with the routing for all national desserts.
import { DessertsComponent } from './desserts/desserts.component';

// This section deals with routing for all dishes regardless of country.
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
  { path: 'australia', component: AustraliaComponent },
  { path: 'austria', component: AustriaComponent },


  { path: 'desserts', component: DessertsComponent },
  { path: 'dishes', component: DishesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
