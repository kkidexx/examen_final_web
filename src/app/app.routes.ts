import { Routes } from '@angular/router';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { EditarComponent } from './pages/editar/editar.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { VvisComponent } from './pages/vvis/vvis.component';
import { privadoGuard } from './guards/privado.guard';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PrivadoComponent } from './pages/privado/privado.component';

export const routes: Routes = [



  { path: 'libros/:idLibro', component: DetallesComponent},
  { path: 'editar/:idLibro', component: EditarComponent},
  { path: 'gestion', component: GestionComponent},
  { path: 'Visualizar', component: VvisComponent},

  { path: 'privado', component: PrivadoComponent, canActivate:[privadoGuard]},
  { path: 'login', component: LoginComponent, },
  { path: 'registro', component: RegistroComponent, }



];
