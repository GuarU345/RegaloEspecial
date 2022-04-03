import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { ContinuarComponent } from './Componentes/continuar/continuar.component';
import { Fiesta18Component } from './Componentes/fiesta18/fiesta18.component';
import { DashboardComponent } from './Componentes/dashboard/dashboard.component';
import { PrimermensajeComponent } from './Componentes/primermensaje/primermensaje.component';
import { PortadaComponent } from './Componentes/portada/portada.component';
import { PrimerasfotosComponent } from './Componentes/primerasfotos/primerasfotos.component';
import { CancionfavComponent } from './Componentes/cancionfav/cancionfav.component';
import { FotofavComponent } from './Componentes/fotofav/fotofav.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ContinuarComponent,
    Fiesta18Component,
    DashboardComponent,
    PrimermensajeComponent,
    PortadaComponent,
    PrimerasfotosComponent,
    CancionfavComponent,
    FotofavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
