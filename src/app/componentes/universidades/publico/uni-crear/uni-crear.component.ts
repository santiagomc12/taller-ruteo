import { ARREGLO_UNIVERSIDAD } from './../../../../mocks/universidad-mocks';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Universidad } from './../../../../modelos/universidad';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uni-crear',
  templateUrl: './uni-crear.component.html',
  styleUrls: ['./uni-crear.component.css'],
})
export class UniCrearComponent implements OnInit {
  public tmpBase64: any;
  public objUniversidad: Universidad;

  constructor(private toastr: ToastrService, private router: Router) {
    this.objUniversidad = new Universidad(0, '', '', '');
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
      this.objUniversidad.logoBase64 = this.tmpBase64;
      this.objUniversidad.nombreLogo = input.target.files[0].name;
    };
  }

  public enviarInfo(form: NgForm): boolean{
    this.crearUniversidad();
    this.objUniversidad = new Universidad(0,'','','');
    this.mensajeOk();
    this.router.navigate(['/universidades/listar']);
    return true;
  }

  public crearUniversidad(): void {
    this.objUniversidad.codigoUniversidad = ARREGLO_UNIVERSIDAD.length + 1;
    ARREGLO_UNIVERSIDAD.push(this.objUniversidad)
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
}
