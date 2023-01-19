import { Component } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent {
// CONSUMIR SERVICIO UserServices

// Crear instancia de UserServices
constructor(private userService: UserserviceService){}

// Ejecutar el metodo getUsersAll del servicio al cargar el componente
listado = new Array();

ngOnInit(){
this.userService.getUsersAll().subscribe({
next: (UserAll: Users[]) => this.listado = UserAll,
error: (e) => console.error(e),
complete: () => console.info("La API devolcio todos los registros")
});
}

}
