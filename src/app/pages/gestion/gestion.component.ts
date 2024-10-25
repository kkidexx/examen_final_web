import { Component } from '@angular/core';
import { FormularioComponent } from "../../components/formulario/formulario.component";
import { TablaComponent } from "../../components/tabla/tabla.component";

@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [FormularioComponent, TablaComponent],
  templateUrl: './gestion.component.html',
  styleUrl: './gestion.component.css'
})
export class GestionComponent {

}
