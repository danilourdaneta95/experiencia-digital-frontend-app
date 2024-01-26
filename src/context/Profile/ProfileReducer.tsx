/* eslint-disable @typescript-eslint/no-unsafe-return */

import {CONSTANTS} from 'settings/Constants';

export default (state, action) => {
  const {payload, type} = action;

  switch (type) {
    case CONSTANTS.ProfileContext.GET_PROFILES:
      return {
        ...state,
        profiles: payload,
      };
    case CONSTANTS.ProfileContext.GET_USER_PROFILE:
      return {
        ...state,
        userProfile: payload,
      };
    case CONSTANTS.ProfileContext.SET_USER_PROFILE:
      return {
        ...state,
        userProfile: payload,
      };
    case CONSTANTS.ProfileContext.GET_USER_CLASSES_TODAY:
      return {
        ...state,
        classesToday: payload,
      };
    case CONSTANTS.ProfileContext.GET_USER_DATE_TODAY:
      return {
        ...state,
        today: payload,
      };
    case CONSTANTS.ProfileContext.GET_TEST_ENVIRONMENT:
      return {
        ...state,
        isTestEnvironment: payload,
      };
    case CONSTANTS.ProfileContext.GET_USER_DATA:
      return {
        ...state,
        user: payload,
      };
    case CONSTANTS.ProfileContext.SET_CREDENTIAL:
      return {
        ...state,
        credential: payload,
      };
    case CONSTANTS.ProfileContext.GET_CREDENTIAL:
      return {
        ...state,
        credential: payload,
      };

    default:
      return state;
  }
};
