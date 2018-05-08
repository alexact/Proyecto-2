import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetodosEComponent} from '../metodos-e/metodos-e.component';
import { BiseccionComponent } from '../biseccion/biseccion.component';
import { RectangulosComponent } from  '../rectangulos/rectangulos.component';
import { SecanteComponent } from '../secante/secante.component';
import { ReglaFalsaComponent } from '../regla-falsa/regla-falsa.component';
import { NewtonRapshonComponent } from '../newton-rapshon/newton-rapshon.component';
import { PuntoFijoComponent } from '../punto-fijo/punto-fijo.component';
import { AppComponent } from '../app.component';
import { PolinomiosComponent } from '../polinomios/polinomios.component';
import { TrapecioComponent } from '../trapecio/trapecio.component';
import { MontecarloComponent } from '../montecarlo/montecarlo.component';
import { SuntercioComponent } from '../suntercio/suntercio.component';
import { StresoctavosComponent } from '../stresoctavos/stresoctavos.component';
import { RepresentacionComponent } from '../representacion/representacion.component';


const routes: Routes = [
{path: 'metodos', component: MetodosEComponent},
{path: 'biseccion', component: BiseccionComponent},
{path: 'secante',component: SecanteComponent},
{path:'reglafalsa',component: ReglaFalsaComponent},
{path: 'newtonrapshon',component: NewtonRapshonComponent},
{path: 'puntofijo', component: PuntoFijoComponent },
{path: 'polinomios', component: PolinomiosComponent},
{path: 'rectangulos', component: RectangulosComponent},
{path: 'trapecio', component: TrapecioComponent},
{path: 'montecarlo', component: MontecarloComponent},
{path: 'suntercio', component: SuntercioComponent},
{path: 'stresoctavos', component: StresoctavosComponent},
{path: 'representacion', component: RepresentacionComponent},
];
export const routableComponents =[MetodosEComponent];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
