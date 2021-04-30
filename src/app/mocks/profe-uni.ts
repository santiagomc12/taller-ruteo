import { ARREGLO_UNIVERSIDAD } from './universidad-mocks';
import { ProfeUni } from './../modelos/profe-uni';
import {ARREGLO_PROFESORES} from './../mocks/profesor-mocks';

export const ARREGLO_PROFUNI: Array<ProfeUni> = [
  new ProfeUni(ARREGLO_PROFESORES[1], ARREGLO_UNIVERSIDAD[0]),
  new ProfeUni(ARREGLO_PROFESORES[2], ARREGLO_UNIVERSIDAD[0]),
  new ProfeUni(ARREGLO_PROFESORES[3], ARREGLO_UNIVERSIDAD[1])
]
