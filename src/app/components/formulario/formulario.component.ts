import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  servicio= inject(ServicioService)

  id:any
  autor:any
  titulolibro:any
  aniopublicado:any



  guardar(data: any){
    alert("Mensaje resivido")
    this.servicio.postWeb(data.value).subscribe()
    this.limpiar()

  }





  limpiar(){
    this.id=''; this.autor=''; this.titulolibro=''; this.aniopublicado=''
  }

}
