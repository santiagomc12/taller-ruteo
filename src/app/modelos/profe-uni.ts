import { Universidad } from './universidad';
import { Profesor } from './profesor';
export class ProfeUni {
  public codProfesor: Profesor;
  public codUniversidad: Universidad;

  constructor(prof: Profesor, cod: Universidad){
    this.codProfesor = prof;
    this.codUniversidad = cod;
  }
}
