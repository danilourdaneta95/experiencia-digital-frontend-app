export interface User {
  _id: string;
  email: string;
  firstname: string;
  fullname: string;
  carrera: string;
  perfilId: number;
  perfilName: string;
  esColaborador: boolean;
  esEgresado: boolean;
  iat: number;
  exp: number;
}
