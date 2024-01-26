import {createContext} from 'react';

/**
 * @param isLoggedIn - Return State isLoggedIn true or false
 * @param getAzureRefreshToken
 * @param getStateLogIn
 * @param SignIn
 * @param SignOut
 *
 * @returns State of isLoggedIn and data of getAzureRefreshToken
 */
const AuthContext = createContext(undefined);

export default AuthContext;
