import { UniAdminComponent } from './componentes/universidades/publico/uni-admin/uni-admin.component';
import { UniCrearComponent } from './componentes/universidades/publico/uni-crear/uni-crear.component';
import { UniEditarComponent } from './componentes/universidades/publico/uni-editar/uni-editar.component';
import { UniListarComponent } from './componentes/universidades/publico/uni-listar/uni-listar.component';
import { UniPrincipalComponent } from './componentes/universidades/publico/uni-principal/uni-principal.component';
import { DetalleComponent } from './componentes/privado/detalle/detalle.component';
import { PrincipalComponent } from './componentes/privado/principal/principal.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { ProfesEditarComponent } from './componentes/publico/profes-editar/profes-editar.component';
import { ProfesCrearComponent } from './componentes/publico/profes-crear/profes-crear.component';
import { ProfesPrincipalComponent } from './componentes/publico/profes-principal/profes-principal.component';
import { AccesoComponent } from './componentes/acceso/acceso.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfesListarComponent } from './componentes/publico/profes-listar/profes-listar.component';
import { ProfesAdminComponent } from './componentes/publico/profes-admin/profes-admin.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'acceso', component: AccesoComponent },
  {
    path: 'profesores',
    component: ProfesPrincipalComponent,
    children: [
      { path: 'listar', component: ProfesListarComponent },
      { path: 'editar/:codProfesor', component: ProfesEditarComponent },
      { path: 'crear', component: ProfesCrearComponent },
      { path: 'admin', component: ProfesAdminComponent },
      { path: '', redirectTo: '/inicio', pathMatch: 'full' },
      { path: '**', component: NoEncontradoComponent },
    ],
  },
  {
    path: 'universidades',
    component: UniPrincipalComponent,
    children: [
      { path: 'listar', component: UniListarComponent },
      { path: 'editar/:codUniversidad', component: UniEditarComponent },
      { path: 'crear', component: UniCrearComponent },
      { path: 'admin', component: UniAdminComponent },
      { path: '', redirectTo: '/inicio', pathMatch: 'full' },
      { path: '**', component: NoEncontradoComponent },
    ],
  },
  {
    path: 'externa',
    component: PrincipalComponent,
    children: [
      { path: 'detalle', component: DetalleComponent },
      { path: 'detalle/:codProfe', component: DetalleComponent },
      { path: '', redirectTo: 'detalle', pathMatch: 'full' },
      { path: '**', component: NoEncontradoComponent },
    ],
  },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', component: NoEncontradoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
