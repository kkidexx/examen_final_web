import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  servicio = inject(LoginService)


  email: any
  password:any


  login( user: any){
    this.servicio.postLogin(user.value).subscribe( user =>{

      if( user.accesToken !=''){
        localStorage.setItem("login", 'true')
        window.location.href='privado'
      }
    })

  }


}
