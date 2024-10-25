import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServicioService } from '../../services/servicio.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {
  servicio = inject(ServicioService)
  ruta = inject(ActivatedRoute)

  id:any
  autor:any
  titulolibro:any
  aniopublicado:any


  ngOnInit() {


    this.ruta.params.subscribe(parametre =>{
    this.servicio.getWebb(parametre['idLibro']).subscribe(p=>{
      this.id= p.id
      this.autor= p.auto
      this.titulolibro= p.titulolibro
      this.aniopublicado=p.aniopublicado

    })

    })



  }

  editar(data:any){
    this.servicio.putWWeb(data.value).subscribe()
    location.href= 'gestion'

  }


}
