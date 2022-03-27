import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContinuarComponent } from './Componentes/continuar/continuar.component';
import { Fiesta18Component } from './Componentes/fiesta18/fiesta18.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';

const routes: Routes = [
  {path: '', redirectTo:'11/04', pathMatch:'full'},
  {path:'11/04',component:InicioComponent},
  {path:'fiesta',component:Fiesta18Component},
  {path:'inicio',component:ContinuarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
