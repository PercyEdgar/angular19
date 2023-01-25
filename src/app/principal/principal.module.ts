import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { VistaComponent } from './vista/vista.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from './login/login.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { RegistroComponent } from './registro/registro.component';
import {Asincrona23Component } from './asincrona23/asincrona23.component';

// Librerias para Ángular Material
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import { HomeComponent } from './home/home.component';
import {MatMenuModule} from '@angular/material/menu';






@NgModule({
  declarations: [
    MenuComponent,
    VistaComponent,
    FormularioComponent,
    BusquedaComponent,
    LoginComponent,
    MensajeComponent,
    RegistroComponent,
    Asincrona23Component,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    // Componente para Ángular material
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatTableModule,
    MatMenuModule
    
  ],
  exports:[
    MenuComponent,
    VistaComponent,
    FormularioComponent,
    BusquedaComponent,
    LoginComponent,
    Asincrona23Component,
    HomeComponent,

    // Componente para Ángular material
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatTableModule,
    MatMenuModule

  ]
})
export class PrincipalModule { }
