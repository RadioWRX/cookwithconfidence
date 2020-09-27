import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AfghanistanComponent } from './afghanistan/afghanistan.component';

const routes: Routes = [
  { path: '', redirectTo: 'afghanistan', pathMatch: 'full' },
  { path: 'afghanistan', component: AfghanistanComponent },
  { path: 'afghanistan', component: AfghanistanComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
