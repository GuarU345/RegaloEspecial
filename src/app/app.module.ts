import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { ContinuarComponent } from './Componentes/continuar/continuar.component';
import { Fiesta18Component } from './Componentes/fiesta18/fiesta18.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ContinuarComponent,
    Fiesta18Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
