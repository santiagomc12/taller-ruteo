import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';

import { AccesoComponent } from './componentes/acceso/acceso.component';
import { MenuSuperiorComponent } from './componentes/menu-superior/menu-superior.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ProfesCrearComponent } from './componentes/publico/profes-crear/profes-crear.component';
import { ProfesListarComponent } from './componentes/publico/profes-listar/profes-listar.component';
import { ProfesAdminComponent } from './componentes/publico/profes-admin/profes-admin.component';
import { ProfesPrincipalComponent } from './componentes/publico/profes-principal/profes-principal.component';
import { MenuLateralComponent } from './componentes/privado/menu-lateral/menu-lateral.component';
import { PrincipalComponent } from './componentes/privado/principal/principal.component';
import { DetalleComponent } from './componentes/privado/detalle/detalle.component';
import { ArregloPipe } from './misPipes/arreglo.pipe';
import { ProfesEditarComponent } from './componentes/publico/profes-editar/profes-editar.component';
import { UniAdminComponent } from './componentes/universidades/publico/uni-admin/uni-admin.component';
import { UniCrearComponent } from './componentes/universidades/publico/uni-crear/uni-crear.component';
import { UniEditarComponent } from './componentes/universidades/publico/uni-editar/uni-editar.component';
import { UniListarComponent } from './componentes/universidades/publico/uni-listar/uni-listar.component';
import { UniPrincipalComponent } from './componentes/universidades/publico/uni-principal/uni-principal.component';
import { UniDetalleComponent } from './componentes/universidades/privado/uni-detalle/uni-detalle.component';
import { UniMenuLateralComponent } from './componentes/universidades/privado/uni-menu-lateral/uni-menu-lateral.component';

@NgModule({
  declarations: [
    AppComponent,
    AccesoComponent,
    MenuSuperiorComponent,
    NoEncontradoComponent,
    InicioComponent,
    ProfesCrearComponent,
    ProfesListarComponent,
    ProfesAdminComponent,
    ProfesPrincipalComponent,
    MenuLateralComponent,
    PrincipalComponent,
    DetalleComponent,
    ArregloPipe,
    ProfesEditarComponent,
    UniAdminComponent,
    UniCrearComponent,
    UniEditarComponent,
    UniListarComponent,
    UniPrincipalComponent,
    UniDetalleComponent,
    UniMenuLateralComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
