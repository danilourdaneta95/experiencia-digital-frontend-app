import {gql} from '@apollo/client';

const AZURE_LOGIN = gql`
  mutation LoginWithAzure($azureLogInInput: SocialNetworkLogInInput!) {
    loginWithAzure(azureLogInInput: $azureLogInInput) {
      accessToken
      refreshToken
    }
  }
`;

export interface ILoginAzure {
  loginWithAzure: ILoginWithAzure;
}
export interface ILoginWithAzure {
  accessToken: string;
  refreshToken: string;
}

export default {
  AZURE_LOGIN,
};
