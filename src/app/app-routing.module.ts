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
import { CaboVerdeComponent } from './cabo-verde/cabo-verde.component';
import { CambodiaComponent } from './cambodia/cambodia.component';
import { CameroonComponent } from './cameroon/cameroon.component';
import { CanadaComponent } from './canada/canada.component';
import { CentralAfricanRepublicComponent } from './central-african-republic/central-african-republic.component';
import { ChadComponent } from './chad/chad.component';
import { ChileComponent } from './chile/chile.component';
import { ChinaComponent } from './china/china.component';
import { ColombiaComponent } from './colombia/colombia.component';
import { ComorosComponent } from './comoros/comoros.component';
import { CongoComponent } from './congo/congo.component';
import { CostaRicaComponent } from './costa-rica/costa-rica.component';
import { CoteDivoireComponent } from './cote-divoire/cote-divoire.component';
import { CroatiaComponent } from './croatia/croatia.component';
import { CubaComponent } from './cuba/cuba.component';
import { CyprusComponent } from './cyprus/cyprus.component';
import { CzechiaComponent } from './czechia/czechia.component';

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
  { path: 'azerbaijan', component: AzerbaijanComponent },
  { path: 'bahamas', component: BahamasComponent },
  { path: 'bahrain', component: BahrainComponent },
  { path: 'bangladesh', component: BangladeshComponent },
  { path: 'barbados', component: BarbadosComponent },
  { path: 'belarus', component: BelarusComponent },
  { path: 'belgium', component: BelgiumComponent },
  { path: 'belize', component: BelizeComponent },
  { path: 'benin', component: BeninComponent },
  { path: 'bhutan', component: BhutanComponent },
  { path: 'bolivia', component: BoliviaComponent },
  { path: 'bosnia-herzegovina', component: BosniaHerzegovinaComponent },
  { path: 'botswana', component: BotswanaComponent },
  { path: 'brazil', component: BrazilComponent },
  { path: 'brunei', component: BruneiComponent },
  { path: 'bulgaria', component: BulgariaComponent },
  { path: 'burkina-faso', component: BurkinaFasoComponent },
  { path: 'burundi', component: BurundiComponent },
  { path: 'cabo-verde', component: CaboVerdeComponent },
  { path: 'cambodia', component: CambodiaComponent },
  { path: 'cameroon', component: CameroonComponent },
  { path: 'canada', component: CanadaComponent },
  { path: 'cambodia', component: CambodiaComponent },
  { path: 'central-african-Republic', component: CentralAfricanRepublicComponent },
  { path: 'chad', component: ChadComponent },
  { path: 'chile', component: ChileComponent },
  { path: 'china', component: ChinaComponent },
  { path: 'colombia', component: ColombiaComponent },
  { path: 'comoros', component: ComorosComponent },
  { path: 'congo', component: CongoComponent },
  { path: 'costa-rica', component: CostaRicaComponent },
  { path: 'cote-divoire', component: CoteDivoireComponent },
  { path: 'croatia', component: CroatiaComponent },
  { path: 'cuba', component: CubaComponent },
  { path: 'cyprus', component: CyprusComponent },
  { path: 'czechia', component: CzechiaComponent },


  { path: 'desserts', component: DessertsComponent },
  { path: 'dishes', component: DishesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
