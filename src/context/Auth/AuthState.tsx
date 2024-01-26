import AuthReducer from './AuthReducer';
import {CONSTANTS} from 'settings/Constants';
import {useReducer} from 'react';
import AuthContext from './AuthContext';
import AzureAuth from 'react-native-azure-auth';
import {getNewToken} from '~/settings/Apollo';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthStateProps {
  children: React.ReactNode;
}

/**
 * It's a React component that returns a context provider
 * @param {AuthStateProps} props - AuthStateProps
 * @returns The AuthState function is being returned.
 */
export default function AuthState(props: AuthStateProps) {
  const initialState = {
    isLoggedIn: false,
    azureAccessToken: undefined,
    azureRefreshToken: undefined,
    apiAccessToken: undefined,
    apiRefreshToken: undefined,
    isLoading: undefined,
    authorized: undefined,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  /**
   * Init Azure Auth
   */

  /* It's a constant that is being used to store the client id of the application. */
  const CLIENT_ID = CONSTANTS.AuthContext.CLIENT_ID;

  /* It's a new instance of the AzureAuth class. */
  const azureAuth = new AzureAuth({
    clientId: CLIENT_ID,
  });

  /**
   * SignIn() is an async function that uses the AzureAuth library to get an access token and a refresh
   * token from Azure AD
   */
  const SignIn = async () => {
    try {
      const tokens = await azureAuth.webAuth.authorize({
        scope: 'openid profile User.Read offline_access',
        prompt: 'login',
      });
      const refreshToken = await azureAuth.auth.cache.getRefreshToken(tokens.userId);
      setAzureAccessToken(tokens.accessToken);
      setAzureRefreshToken(refreshToken.refreshToken);
      setLogIn(tokens.accessToken ? true : false);

      /* It's a function that is used to get a new access token and a new refresh token from the API. */
      getNewToken(tokens.accessToken, refreshToken.refreshToken)
        .then(res => {
          AsyncStorage.setItem(CONSTANTS.STORAGE.API_ACCESS_TOKEN, res.accessToken).then(() => {
            setApiAccessToken(res.accessToken);
            setApiRefreshToken(res.refreshToken);
          });
        })
        .catch(error => {
          console.error(error);
        });
    } catch (error) {
      if (error.error === 'aa.session.user_cancelled') {
        console.log('El usuario cancelo la petición de inicio de sesión');
      }
      if (error.error === 'access_denied') {
        console.error('Error durnate el flujo de login con Azure: ', error);
      }
    }
  };

  /**
   * A function that is used to sign out of the application.
   */
  const SignOut = async () => {
    const response = undefined;
    try {
      dispatch({
        type: `${CONSTANTS.AuthContext.AZURE_ACCESS_TOKEN}`,
        payload: response,
      });
      dispatch({
        type: `${CONSTANTS.AuthContext.API_ACCESS_TOKEN}`,
        payload: response,
      });
      dispatch({
        type: `${CONSTANTS.AuthContext.SIGN_IN}`,
        payload: response,
      });

      console.log(`setLogIn = ${response}`);
    } catch (error) {
      console.error('Error Azure operation SignOut: ', error);
    }
  };

  /**
   * `setAzureAccessToken` is a function that takes a value and set value on globalState of azureAccessToken as response.
   */
  const setAzureAccessToken = value => {
    const response = value;
    // console.log(`AzureAccessToken = ${value}`);
    dispatch({
      type: `${CONSTANTS.AuthContext.AZURE_ACCESS_TOKEN}`,
      payload: response,
    });
  };

  /**
   * setAzureRefreshToken is a function that takes a value and set value on globalState of azureRefreshToken as response.
   */
  const setAzureRefreshToken = value => {
    const response = value;
    // console.log(`AzureRefreshToken = ${value}`);
    dispatch({
      type: `${CONSTANTS.AuthContext.AZURE_REFRESH_TOKEN}`,
      payload: response,
    });
  };

  /**
   * getAzureAccessToken is a function that expose globalState for read azureAccessToken.
   */
  const getAzureAccessToken = () => {
    dispatch({
      type: `${CONSTANTS.AuthContext.AZURE_ACCESS_TOKEN}`,
    });
  };

  /**
   * getAzureAccessToken is a function that expose globalState for read azureRefreshToken.
   */
  const getAzureRefreshToken = () => {
    dispatch({
      type: `${CONSTANTS.AuthContext.AZURE_REFRESH_TOKEN}`,
    });
  };

  const setApiAccessToken = value => {
    const response = value;
    console.log(`ApiAccessToken = ${value}`);
    dispatch({
      type: `${CONSTANTS.AuthContext.API_ACCESS_TOKEN}`,
      payload: response,
    });
  };

  const setApiRefreshToken = value => {
    const response = value;
    console.log(`ApiRefreshToken = ${value}`);
    dispatch({
      type: `${CONSTANTS.AuthContext.API_REFRESH_TOKEN}`,
      payload: response,
    });
  };

  const getApiAccessToken = () => {
    const response = state.apiAccessToken;
    //console.log(`state ApiAccess = ${response}`);
    dispatch({
      type: `${CONSTANTS.AuthContext.API_ACCESS_TOKEN}`,
      payload: response,
    });
  };

  const getApiRefreshToken = () => {
    const response = state.apiRefreshToken;
    dispatch({
      type: `${CONSTANTS.AuthContext.API_REFRESH_TOKEN}`,
      payload: response,
    });
  };

  const setLogIn = value => {
    const response = value;
    //console.log(`setLogIn = ${response}`);
    dispatch({
      type: `${CONSTANTS.AuthContext.SIGN_IN}`,
      payload: response,
    });
  };

  const setAuthorized = () => {
    let response;
    if (state.azureAccessToken != false && state.azureRefreshToken != false) {
      return (response = true);
    }
    dispatch({
      type: `${CONSTANTS.AuthContext.AUTHORIZED}`,
      payload: response,
    });
  };

  const setIsLoading = () => {
    let response;
    if (state.azureAccessToken != false && state.azureRefreshToken == false) {
      return (response = true);
    }
    dispatch({
      type: `${CONSTANTS.AuthContext.IS_LOADING}`,
      payload: response,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: state.isLoggedIn,
        azureAccessToken: state.azureAccessToken,
        azureRefreshToken: state.azureRefreshToken,
        apiAccessToken: state.apiAccessToken,
        apiRefreshToken: state.apiRefreshToken,
        isLoading: state.isLoading,
        authorized: state.authorized,
        setApiAccessToken,
        setApiRefreshToken,
        getAzureAccessToken,
        getAzureRefreshToken,
        getApiAccessToken,
        getApiRefreshToken,
        setAuthorized,
        setIsLoading,
        SignIn,
        SignOut,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
