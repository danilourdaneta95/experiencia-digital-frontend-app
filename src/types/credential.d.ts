export interface GetCredencial {
  nombre: string;
  rut: string;
  url: string;
  carrera: string;
  jornada: string;
  sede: string;
}

export interface Data {
  getCredencial: GetCredencial;
}

export interface RootObject {
  data: Data;
}
