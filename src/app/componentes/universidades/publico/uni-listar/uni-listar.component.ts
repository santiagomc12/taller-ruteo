import { Component, OnInit } from '@angular/core';
import { ArregloPipe } from './../../../../misPipes/arreglo.pipe';
import { Universidad } from '../../../../modelos/universidad';
import { ARREGLO_UNIVERSIDAD } from '../../../../mocks/universidad-mocks';

@Component({
  selector: 'app-uni-listar',
  templateUrl: './uni-listar.component.html',
  styleUrls: ['./uni-listar.component.css'],
  providers: [ArregloPipe],
})
export class UniListarComponent implements OnInit {
  public arrUniversidades: Array<Universidad>;
  public paginaActual: number;
  public cantidadMostrar: number;
  public cantidadPaginas: number;
  public cantidadTotalRegistros: number;

  constructor(private ordenar: ArregloPipe) {
    const parametros = ['codigoUniversidad', 'ASC'];
    this.arrUniversidades = this.ordenar.transform(
      ARREGLO_UNIVERSIDAD,
      parametros
    );
    this.paginaActual = 1;
    this.cantidadMostrar = 5;
    this.cantidadTotalRegistros = this.arrUniversidades.length;
    this.cantidadPaginas = Math.ceil(
      this.cantidadTotalRegistros / this.cantidadMostrar
    );
  }

  ngOnInit(): void {}
}
