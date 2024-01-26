/* eslint-disable @typescript-eslint/restrict-template-expressions */
import ProfileReducer from './ProfileReducer';
import * as dataProfiles from 'data/profiles.json';
import {CONSTANTS} from 'settings/Constants';
import {useContext, useReducer} from 'react';
import ProfileContext from './ProfileContext';
import AuthContext from '../Auth/AuthContext';
import jwt_decode from 'jwt-decode';

interface ProfileStateProps {
  children: React.ReactNode;
}

const ProfileState = (props: ProfileStateProps) => {
  const initialState = {
    user: [],
    profiles: [],
    userProfile: undefined,
    today: '',
    classesToday: [],
    isTestEnvironment: undefined,
    credential: [],
  };

  const [state, dispatch] = useReducer(ProfileReducer, initialState);
  const {apiAccessToken} = useContext(AuthContext);

  // const getUserDateToDay = async () => {
  //   const response = await apolloClient.query<HorarioDiaType>({
  //     query: gqlHorarioDia.queries.GET_HORARIO_DIA,
  //     variables: {
  //       getHorarioDiaInput: {},
  //     },
  //   });
  //   // console.log(response.data.horarioDia.clases)
  //   dispatch({
  //     type: 'GET_USER_DATE_TODAY',
  //     payload: response.data.horarioDia.dia,
  //   });
  //   dispatch({
  //     type: 'GET_USER_CLASSES_TODAY',
  //     payload: response.data.horarioDia.clases,
  //   });
  // };

  /**
   * Get all Profiles and set data y Context
   */
  const getProfiles = () => {
    const response = dataProfiles.profiles;
    // console.log(JSON.stringify(response));
    dispatch({
      type: `${CONSTANTS.ProfileContext.GET_PROFILES}`,
      payload: response,
    });
  };

  /**
   * Set Initial user profile and set data y Context
   */
  const getUserProfile = () => {
    const response = state.userProfile;

    return response;
    // const data = GetUserData();
    // const response = data.perfilId;
    // console.log(`getUserProfile value = ${response}`);
    // dispatch({
    //   type: `${CONSTANTS.ProfileContext.GET_USER_PROFILE}`,
    //   payload: response,
    // });
  };

  /**
   * Sets the user profile is Tester. They can select or force type profiles
   * TODO: IMPLEMENTAR LA FUNCIONALIDAD DE CONTROL DESDE EL BACK
   */
  const getTestEnvironment = () => {
    const response = false;
    dispatch({
      type: `${CONSTANTS.ProfileContext.GET_TEST_ENVIRONMENT}`,
      payload: response,
    });
  };

  /**
   * Set the user profile on Context when Select.
   */
  const setUserProfile = optionRef => {
    const response = optionRef;
    // console.log(`setUserProfile value = ${response}`);
    dispatch({
      type: `${CONSTANTS.ProfileContext.SET_USER_PROFILE}`,
      payload: response,
    });
  };

  const getUserData = () => {
    const userData = jwt_decode(apiAccessToken);
    const response = userData;
    const profile = userData.perfilId;
    // console.log(response);
    dispatch({
      type: `${CONSTANTS.ProfileContext.GET_USER_DATA}`,
      payload: response,
    });
    dispatch({
      type: `${CONSTANTS.ProfileContext.SET_USER_PROFILE}`,
      payload: profile,
    });
  };
  const setGqlCredential = ([value]) => {
    const response = value;
    // console.log(response);
    dispatch({
      type: `${CONSTANTS.ProfileContext.SET_CREDENTIAL}`,
      payload: response,
    });
  };

  const getGqlCredential = () => {
    const response = state.credential;
    // console.log(response);
    dispatch({
      type: `${CONSTANTS.ProfileContext.GET_CREDENTIAL}`,
      payload: response,
    });
  };

  return (
    <ProfileContext.Provider
      value={{
        user: state.user,
        profiles: state.profiles,
        userProfile: state.userProfile,
        today: state.today,
        classesToday: state.classesToday,
        isTestEnvironment: state.isTestEnvironment,
        getProfiles,
        getUserProfile,
        setUserProfile,
        getTestEnvironment,
        getUserData,
        setGqlCredential,
        getGqlCredential,
        // getUserDateToDay,
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileState;
