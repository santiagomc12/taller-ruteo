import { ArregloPipe } from './../../../misPipes/arreglo.pipe';
import { Component, OnInit } from '@angular/core';
import { Profesor } from '../../../modelos/profesor';
import { ARREGLO_PROFESORES } from '../../../mocks/profesor-mocks';

@Component({
  selector: 'app-profes-listar',
  templateUrl: './profes-listar.component.html',
  styleUrls: ['./profes-listar.component.css'],
  providers: [ArregloPipe],
})
export class ProfesListarComponent implements OnInit {
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
