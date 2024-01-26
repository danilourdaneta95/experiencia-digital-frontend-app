import {gql} from '@apollo/client';
export interface LoginWithAzureProps {
  loginWithAzure: AzureTokensProps;
}
export interface AzureTokensProps {
  accessToken: string;
  refreshToken: string;
}

// Define mutation
const AUTHORIZATION_ACCESSTOKEN = gql`
  mutation LoginWithAzure($azureLogInInput: SocialNetworkLogInInput!) {
    loginWithAzure(azureLogInInput: $azureLogInInput) {
      accessToken
      refreshToken
    }
  }
`;
// useMutation only can called inside of the body of a function component.

// const {azureAccessToken, azureRefreshToken, setApiAccessToken, setApiRefreshToken} = useContext(AuthContext);

// const [loginWithAzure] = useMutation(AUTHORIZATION_ACCESSTOKEN, {
//   onCompleted(data) {
//     console.log(data);
//   },
// });
// loginWithAzure({
//   variables: {
//     azureLogInInput: {
//       accessToken: azureAccessToken,
//       refreshToken: azureRefreshToken,
//     },
//   },
// });

export default AUTHORIZATION_ACCESSTOKEN;
