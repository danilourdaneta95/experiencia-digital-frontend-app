import {gql} from '@apollo/client';

const GET_STUDENT = gql`
  query Student($getStudentInput: GetStudentInput!) {
    student(GetStudentInput: $getStudentInput) {
      rut
      name
      lastname
      email
      carrera
      perfil
    }
  }
`;

export default {
  GET_STUDENT,
};
