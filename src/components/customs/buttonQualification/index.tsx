import * as React from 'react';
import ButtonIcon from '~/components/core/buttons/buttonIcon/ButtonIcon';
import renderComponents from 'data/controlRender/renderComponents.json';
import ProfileContext from '~/context/Profile/ProfileContext';
import {useContext, useEffect} from 'react';
import {Linking} from 'react-native';
import {CONSTANTS} from '~/settings/Constants';

export default function ButtonQualifications() {
  /* Hooks of Context for read Profile of User  */
  const {userProfile, getUserProfile, getProfiles} = useContext(ProfileContext);
  const [renderCard] = React.useState(renderComponents.ButtonQualification);
  const renderListProfiles = renderCard.map(data => data.id);
  const isRender = renderCard.map(data => data.render);

  useEffect(() => {
    getProfiles();
    getUserProfile();
  }, []);

  if (userProfile == renderListProfiles[userProfile] && isRender[userProfile]) {
    return (
      <>
        <ButtonIcon
          labelText={'Calificaciones'}
          iconName={'calendar-2-line'}
          iconColor={'#001894'}
          iconSize={26}
          event={() => Linking.openURL(CONSTANTS.ROUTES.MIS_CALIFICACIONES)}
        />
      </>
    );
  }
}
