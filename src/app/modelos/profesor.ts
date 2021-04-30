export class Profesor {
  public codigo: number;
  public documento: number;
  public nombreProfesor: string;
  public nombreFoto: string;
  public fotoBase64: string;

  public constructor(
    cod: number,
    doc: number,
    nop: string,
    nof: string,
    f64: string
  ) {
    this.codigo = cod;
    this.documento = doc;
    this.nombreProfesor = nop;
    this.nombreFoto = nof;
    this.fotoBase64 = f64;
  }
}
