import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent {

  constructor(private ruta: ActivatedRoute, private servicio: ServicioService){}
  any:any

  ngOnInit(){
    this.ruta.params.subscribe(p=>{
      console.log(p['idLibro'])
      let id=p['idLibro'];

      this.servicio.getWebb(id).subscribe(eny=>{
        this.any=eny
        console.log(eny)
      })
    })
  }




}
