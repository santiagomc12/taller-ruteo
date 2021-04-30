export class Universidad {
  public codigoUniversidad: number;
  public nombreUniversidad: string;
  public nombreLogo: string;
  public logoBase64: string;

  constructor(cod: number, nom: string, log: string, b64: string) {
    this.codigoUniversidad = cod;
    this.nombreUniversidad = nom;
    this.nombreLogo = log;
    this.logoBase64 = b64;
  }
}
