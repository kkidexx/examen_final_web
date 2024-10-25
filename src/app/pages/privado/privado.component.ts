import { Component } from '@angular/core';

@Component({
  selector: 'app-privado',
  standalone: true,
  imports: [],
  templateUrl: './privado.component.html',
  styleUrl: './privado.component.css'
})
export class PrivadoComponent {

  close(){
    localStorage.removeItem('login')
    window.location.href=('login')

  }

}
