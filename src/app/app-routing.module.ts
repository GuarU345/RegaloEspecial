import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CancionfavComponent } from './Componentes/cancionfav/cancionfav.component';
import { ContinuarComponent } from './Componentes/continuar/continuar.component';
import { DashboardComponent } from './Componentes/dashboard/dashboard.component';
import { Fiesta18Component } from './Componentes/fiesta18/fiesta18.component';
import { FotofavComponent } from './Componentes/fotofav/fotofav.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { PortadaComponent } from './Componentes/portada/portada.component';
import { PrimerasfotosComponent } from './Componentes/primerasfotos/primerasfotos.component';
import { PrimermensajeComponent } from './Componentes/primermensaje/primermensaje.component';

const routes: Routes = [
  {path: '', redirectTo:'11/04', pathMatch:'full'},
  {path:'11/04',component:PortadaComponent},
  {path:'fiesta',component:Fiesta18Component},
  {path:'inicio',component:ContinuarComponent},
  {path:'primermensaje',component:PrimermensajeComponent},
  {path:'primerasfotos',component:PrimerasfotosComponent},
  {path:'cancion',component:CancionfavComponent},
  {path:'fotofav',component:FotofavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
