import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanactivateGuard } from './canactivate.guard';
import { CandesactivateGuard } from './candesactivate.guard';
import { Asincrona23Component } from './principal/asincrona23/asincrona23.component';
import { BusquedaComponent } from './principal/busqueda/busqueda.component';
import { FormularioComponent } from './principal/formulario/formulario.component';
import { HomeComponent } from './principal/home/home.component';
import { LoginComponent } from './principal/login/login.component';
import { MensajeComponent } from './principal/mensaje/mensaje.component';
import { RegistroComponent } from './principal/registro/registro.component';
import { VistaComponent } from './principal/vista/vista.component';

const routes: Routes = [
  {path: 'vista', component: VistaComponent},
  {path: 'home', component: HomeComponent},
  {path: 'formulario', component: FormularioComponent,canActivate:[CanactivateGuard]},
  {path: 'busqueda', component: BusquedaComponent,canActivate:[CanactivateGuard]},
  {path: 'asincrona23', component: Asincrona23Component,canActivate:[CanactivateGuard]},

  {path: 'login', component: LoginComponent},
  {path: 'login', component: LoginComponent},

  {path: 'mensaje', component: MensajeComponent,canActivate:[CanactivateGuard]},
  {path: 'registro', component: RegistroComponent,canActivate:[CanactivateGuard],canDeactivate:[CandesactivateGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
