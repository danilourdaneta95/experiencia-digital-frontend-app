export interface HorarioDiaType {
  horarioDia?: HorarioDia;
}

export interface HorarioDia {
  clases?: Clase[];
  dia?: string;
}

export interface Clase {
  horario_inicio: string;
  horario_fin: string;
  materia_nombre?: string;
  materia_codigo?: string;
  modalidad?: string;
  sala?: string;
  profesor?: string;
}
