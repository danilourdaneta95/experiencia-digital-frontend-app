import {gql} from '@apollo/client';

const GET_HORARIO_DIA = gql`
  query HorarioDia($getHorarioDiaInput: GetHorarioDiaInput!) {
    horarioDia(GetHorarioDiaInput: $getHorarioDiaInput) {
      dia
      clases {
        horario_inicio
        horario_fin
        materia_nombre
        materia_codigo
        modalidad
        sala
        profesor
      }
    }
  }
`;

export default {
  GET_HORARIO_DIA,
};
