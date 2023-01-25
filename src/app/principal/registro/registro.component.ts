import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  firsName="";
  

  enviado= false;
  
  EnviarRegistro(){
  alert('Mensaje: ' + '\n Registrado');
  this.enviado = true;
  }
  
  SalirDeRuta(): Observable<boolean> | boolean{
  // Crietrio para evitar que el usuario abandone el cpomponente
  
  // Si mensaje no esta vacio o enviado es true
  if(!this.firsName || this.enviado ){
  return true;
  }
  
  const confirmar = confirm("¿Desea abandonar el formulario? \n Perdera todos los datos!!");
  return confirmar;
  }
}
