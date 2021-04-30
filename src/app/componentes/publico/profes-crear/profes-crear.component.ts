import { element } from 'protractor';
import { ARREGLO_PROFUNI } from './../../../mocks/profe-uni';
import { ProfeUni } from './../../../modelos/profe-uni';
import { Profesor } from './../../../modelos/profesor';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { ARREGLO_PROFESORES } from 'src/app/mocks/profesor-mocks';
import { Router } from '@angular/router';
import { Universidad } from './../../../modelos/universidad';
import { ARREGLO_UNIVERSIDAD } from './../../../mocks/universidad-mocks';

@Component({
  selector: 'app-profes-crear',
  templateUrl: './profes-crear.component.html',
  styleUrls: ['./profes-crear.component.css'],
})
export class ProfesCrearComponent implements OnInit {
  public tmpBase64: any;
  public objProfesor: Profesor;
  public arrUniversidad: Array<Universidad>;
  public tmpArrUniversidad: Array<Universidad>;
  public universidadSeleccionada: Universidad;
  public profeUniSeleccionado: ProfeUni;
  public arrProfeUniversidad: Array<ProfeUni>;

  constructor(private toastr: ToastrService, private router: Router) {
    this.objProfesor = new Profesor(0, 0, '', '', '');
    this.universidadSeleccionada = new Universidad(0, '', '', '');
    this.tmpArrUniversidad = [];
    this.arrUniversidad = ARREGLO_UNIVERSIDAD;
    this.profeUniSeleccionado = new ProfeUni(
      new Profesor(0, 0, '', '', ''),
      new Universidad(0, '', '', '')
    );
    this.arrProfeUniversidad = ARREGLO_PROFUNI;
  }

  ngOnInit(): void {}

  public seleccionarFoto(input: any): any {
    if (!input.target.files[0] || input.target.files[0].length === 0) {
      //Si no es un objeto (lo que viene en la cajita) o si es un objeto 0
      return;
    }
    const mimeType = input.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      const parametros = {
        closeButton: true,
        enableHtml: true,
        progressBar: true,
        positionClass: 'toast-top-right',
        timeOut: 8000,
      };
      this.toastr.error(
        'No se admiten archivos diferentes a <strong>imágenes</strong>',
        'Advertencia',
        parametros
      );
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(input.target.files[0]);
    reader.onload = () => {
      this.tmpBase64 = reader.result;
      this.objProfesor.fotoBase64 = this.tmpBase64;
      this.objProfesor.nombreFoto = input.target.files[0].name;
    };
  }

  public enviarInfo(form: NgForm): boolean {
    this.crearProfesor();
    this.guardarProfeUni();
    this.objProfesor = new Profesor(0, 0, '', '', '');
    this.mensajeOk();
    //Aca colocamos un ruteo de redireccionamiento
    this.router.navigate(['/profesores/listar']);
    return true;
  }

  public crearProfesor(): void {
    this.objProfesor.codigo = ARREGLO_PROFESORES.length + 1;
    ARREGLO_PROFESORES.push(this.objProfesor);
  }

  public guardarProfeUni(): void {
    this.tmpArrUniversidad.forEach((element) => {
      this.profeUniSeleccionado = new ProfeUni(this.objProfesor, element);
      ARREGLO_PROFUNI.push(this.profeUniSeleccionado);
    });
  }

  public mensajeOk(): void {
    const parametros = {
      closeButton: true,
      enableHtml: true,
      progressBar: true,
      positionClass: 'toast-top-right',
      timeOut: 8000,
    };
    this.toastr.success(
      'Se ha creado correctamente el docente',
      '',
      parametros
    );
  }

  public obtenerUniversidad(uni: Universidad): void {
    this.tmpArrUniversidad.push((this.universidadSeleccionada = uni));
  }
}
