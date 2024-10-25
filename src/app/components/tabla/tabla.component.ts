import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {

  servicio = inject(ServicioService);
  ene: any;

  ngOnInit() {
    this.servicio.getWeb().subscribe(ene => {
      this.ene = ene;
    });
  }

  eliminar(id: string) {
    this.servicio.deleteWeb(id).subscribe(() => {
      this.ene = this.ene.filter((item: any) => item.id !== id);
    });
  }

}
