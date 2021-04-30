import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ARREGLO_PROFESORES } from 'src/app/mocks/profesor-mocks';
import { Profesor } from 'src/app/modelos/profesor';

@Component({
  selector: 'app-profes-editar',
  templateUrl: './profes-editar.component.html',
  styleUrls: ['./profes-editar.component.css'],
})
export class ProfesEditarComponent implements OnInit {
  public tmpBase64: any;
  public objProfesor: Profesor;

  constructor(private toastr: ToastrService, private route: ActivatedRoute) {
    this.objProfesor = new Profesor(0, 0, '', '', '');
  }

  //Consumir servicios
  ngOnInit(): void {
    this.route.paramMap.subscribe((parametro: ParamMap) => {
      let tmpObj: any;
      const dato = String(parametro.get('codProfesor'));
      const datoNumerico = parseFloat(dato);

      tmpObj = ARREGLO_PROFESORES.find(
        (profe) => profe.codigo === datoNumerico
      );
      this.objProfesor = tmpObj;
    });
  }

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
    this.mensajeOk();
    return true;
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
      'Se ha actualizado correctamente el docente',
      '',
      parametros
    );
  }
}
