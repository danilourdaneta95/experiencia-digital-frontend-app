/* eslint-disable @typescript-eslint/no-unsafe-return */

import {CONSTANTS} from 'settings/Constants';

export default (state, action) => {
  const {payload, type} = action;

  switch (type) {
    case CONSTANTS.ModalContext.GET_STATE_MODAL:
      return {
        ...state,
        StateModal: payload,
      };

    case CONSTANTS.ModalContext.TOGGLE_STATE_MODAL:
      return {
        ...state,
        StateModal: payload,
      };
    case CONSTANTS.ModalContext.SET_STATE_MODAL:
      return {
        ...state,
        StateModal: payload,
      };
    default:
      return state;
  }
};
