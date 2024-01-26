/* eslint-disable @typescript-eslint/no-unsafe-return */

import {CONSTANTS} from 'settings/Constants';

export default (state, action) => {
  const {payload, type} = action;

  switch (type) {
    case CONSTANTS.AuthContext.SIGN_IN:
      return {
        ...state,
        isLoggedIn: payload,
      };

    case CONSTANTS.AuthContext.SIGN_OUT:
      return {
        ...state,
        isLoggedIn: payload,
      };
    case CONSTANTS.AuthContext.AZURE_ACCESS_TOKEN:
      return {
        ...state,
        azureAccessToken: payload,
      };
    case CONSTANTS.AuthContext.AZURE_REFRESH_TOKEN:
      return {
        ...state,
        azureRefreshToken: payload,
      };
    case CONSTANTS.AuthContext.API_ACCESS_TOKEN:
      return {
        ...state,
        apiAccessToken: payload,
      };
    case CONSTANTS.AuthContext.API_REFRESH_TOKEN:
      return {
        ...state,
        apiRefreshToken: payload,
      };
    case CONSTANTS.AuthContext.IS_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case CONSTANTS.AuthContext.AUTHORIZED:
      return {
        ...state,
        authorized: payload,
      };
    default:
      return state;
  }
};
