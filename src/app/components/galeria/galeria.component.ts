import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {

  constructor(private servicio: ServicioService ){}



  ene:any

  ngOnInit() {
    this.servicio.getWeb().subscribe(h=>{
      this.ene = h
    })


  }

}
