import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  servicio = inject(LoginService)

  email:any
  password:any

registro ( user : any){
  let email = user.value.email
  let password = user.value.password
  let rol = 'user'
  let id = user.value.id


  let userusuario ={
    id : id,
    email : email,
    password : password,
    rol : rol

  }


  this.servicio.postResgistrarse( userusuario).subscribe()

}
}
