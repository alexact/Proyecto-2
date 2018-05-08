import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MetodosEComponent} from "./metodos-e/metodos-e.component";
import { AppComponent } from './app.component';
import {HomeModule} from './home/home.module';
import { HttpModule, Http} from '@angular/http';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { BiseccionComponent } from './biseccion/biseccion.component';
import { RectangulosComponent } from './rectangulos/rectangulos.component';
import { SecanteComponent } from './secante/secante.component';
import { ReglaFalsaComponent } from './regla-falsa/regla-falsa.component';
import { NewtonRapshonComponent } from './newton-rapshon/newton-rapshon.component';
import { PuntoFijoComponent } from './punto-fijo/punto-fijo.component';
import { PolinomiosComponent } from './polinomios/polinomios.component';
import { TrapecioComponent } from './trapecio/trapecio.component';
import { MontecarloComponent } from './montecarlo/montecarlo.component';
import { SuntercioComponent } from './suntercio/suntercio.component';
import { StresoctavosComponent } from './stresoctavos/stresoctavos.component';
import { RepresentacionComponent } from './representacion/representacion.component';





@NgModule({
  declarations: [
    AppComponent,
    BiseccionComponent,
    RectangulosComponent,
    SecanteComponent,
    ReglaFalsaComponent,
    NewtonRapshonComponent,
    PuntoFijoComponent,
    PolinomiosComponent,
    TrapecioComponent,
    MontecarloComponent,
    SuntercioComponent,
    StresoctavosComponent,
    RepresentacionComponent,
   


  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HomeModule,
    HttpClientModule,
   
  ],
  providers: [  HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
