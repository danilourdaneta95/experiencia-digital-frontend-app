import {gql} from '@apollo/client';

const GET_GQL_CREDENTIAL = gql`
  query GetCredencial {
    getCredencial {
      nombre
      rut
      url
      carrera
      jornada
      sede
    }
  }
`;

export default {
  GET_GQL_CREDENTIAL,
};
