import { ARREGLO_PROFUNI } from './../../../mocks/profe-uni';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProfeUni } from './../../../modelos/profe-uni';
import { Component, OnInit } from '@angular/core';
import { Profesor } from 'src/app/modelos/profesor';
import { Universidad } from 'src/app/modelos/universidad';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
})
export class DetalleComponent implements OnInit {
  public arregloProfeUniversidades: Array<ProfeUni>;
  public cantidadUniversidades: number;
  public profeUniSeleccionado: ProfeUni;
  public tmp: any;

  constructor(private route: ActivatedRoute) {
    this.arregloProfeUniversidades = [];
    this.cantidadUniversidades = 0;
    this.profeUniSeleccionado = new ProfeUni(
      new Profesor(0, 0, '', '', ''),
      new Universidad(0, '', '', '')
    );
  }

  ngOnInit(): void {
    this.arregloProfeUniversidades = ARREGLO_PROFUNI;
    this.route.paramMap.subscribe((parametro: ParamMap) => {
      this.tmp = parametro.get('codProfe');
      const profeCodigo = parseFloat(this.tmp);

      if (Number.isNaN(profeCodigo) || profeCodigo == 0) {
        this.arregloProfeUniversidades = ARREGLO_PROFUNI;
        this.tmp = 0;
      } else {
        this.arregloProfeUniversidades = ARREGLO_PROFUNI.filter(
          (miProfeUni) => miProfeUni.codProfesor.codigo === profeCodigo
        );
      }

      this.cantidadUniversidades = this.arregloProfeUniversidades.length;

    });
  }
  public seleccionarProfeUni(objPU: ProfeUni): void{
    this.profeUniSeleccionado = objPU;
  }
}
