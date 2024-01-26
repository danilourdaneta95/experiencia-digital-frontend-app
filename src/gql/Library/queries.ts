import {gql} from '@apollo/client';

const GET_LIBRARY_DATA = gql`
  query {
    biblioteca {
      estado
      numero_prestamos
      multas
      codigo_barra
      rut
      prestamos {
        nombre_corto
        nombre_largo
        inicio
        vencimiento
      }
    }
  }
`;

export default {
  GET_LIBRARY_DATA,
};
