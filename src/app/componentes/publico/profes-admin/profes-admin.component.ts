import { Component, OnInit } from '@angular/core';
import { ArregloPipe } from 'src/app/misPipes/arreglo.pipe';
import { ARREGLO_PROFESORES } from 'src/app/mocks/profesor-mocks';
import { Profesor } from 'src/app/modelos/profesor';

@Component({
  selector: 'app-profes-admin',
  templateUrl: './profes-admin.component.html',
  styleUrls: ['./profes-admin.component.css'],
  providers: [ArregloPipe],
})
export class ProfesAdminComponent implements OnInit {
  public arrProfesores: Array<Profesor>;
  public paginaActual: number;
  public cantidadMostrar: number;
  public cantidadPaginas: number;
  public cantidadTotalRegistros: number;

  constructor(private ordenar: ArregloPipe) {
    const parametros = ['nombreProfesor', 'ASC'];
    this.arrProfesores = this.ordenar.transform(ARREGLO_PROFESORES, parametros);
    this.paginaActual = 1;
    this.cantidadMostrar = 5;
    this.cantidadTotalRegistros = this.arrProfesores.length;
    this.cantidadPaginas = Math.ceil(
      this.cantidadTotalRegistros / this.cantidadMostrar
    );
  }

  ngOnInit(): void {}
}
