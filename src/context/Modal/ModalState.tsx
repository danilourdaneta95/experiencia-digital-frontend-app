/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import ModalReducer from './ModalReducer';
import {CONSTANTS} from 'settings/Constants';
import {useEffect, useReducer} from 'react';
import ModalContext from './ModalContext';

interface ModalStateProps {
  children: React.ReactNode;
}

const ModalState = (props: ModalStateProps) => {
  const initialState = {
    StateModal: undefined,
  };

  const [state, dispatch] = useReducer(ModalReducer, initialState);

  useEffect(() => {
    /* A function that is called to now State of Modal */
    getStateModal();
  }, []);

  /**
   * Set Initial State Modal on Context always false = off
   */
  const getStateModal = () => {
    const response = false;
    dispatch({
      type: `${CONSTANTS.ModalContext.GET_STATE_MODAL}`,
      payload: response,
    });
  };

  /**
   * Set Toggle State of Modal
   */
  const toggleStateModal = () => {
    const response = !state.StateModal;
    dispatch({
      type: `${CONSTANTS.ModalContext.TOGGLE_STATE_MODAL}`,
      payload: response,
    });
  };

  /**
   * Set State of Modal
   */
  const setStateModal = (value: boolean) => {
    const response = value;
    // console.log(`Valor de setStateModal ${response}`);
    dispatch({
      type: `${CONSTANTS.ModalContext.SET_STATE_MODAL}`,
      payload: response,
    });
  };

  return (
    <ModalContext.Provider
      value={{
        StateModal: state.StateModal,
        getStateModal,
        toggleStateModal,
        setStateModal,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalState;
