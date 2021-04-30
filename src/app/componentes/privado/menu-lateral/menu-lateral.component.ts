import { ArregloPipe } from './../../../misPipes/arreglo.pipe';
import { Component, OnInit } from '@angular/core';
import { Profesor } from 'src/app/modelos/profesor';
import { ARREGLO_PROFESORES } from 'src/app/mocks/profesor-mocks';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css'],
  providers: [ArregloPipe],
})
export class MenuLateralComponent implements OnInit {
  public arrProfesores: Array<Profesor>;
  public objProfeSeleccionado: Profesor;

  constructor(private ordenar: ArregloPipe) {
    this.objProfeSeleccionado = new Profesor(0, 0, '', '', '');
    this.arrProfesores = [];
  }

  ngOnInit(): void {
    const parametros = ['nombrProfesor', 'asc'];
    this.arrProfesores = this.ordenar.transform(ARREGLO_PROFESORES, parametros);
  }

  public seleccionarProfe(objP: Profesor): void {
    this.objProfeSeleccionado = objP;
  }

  public inicializar(): void {
    const parametros = ['nombrProfesor', 'asc'];
    this.arrProfesores = this.ordenar.transform(ARREGLO_PROFESORES, parametros);
  }
}
