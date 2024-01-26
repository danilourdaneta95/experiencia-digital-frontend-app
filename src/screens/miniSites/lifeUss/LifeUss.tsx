import * as React from 'react';
import ButtonSupportingText from 'components/core/buttons/supportingText/ButtonSupportingText';
import LineSeparator from 'components/core/lineSeparator/LineSeparator';
import {Linking, ScrollView} from 'react-native';
import renderButtonVidaUss from 'data/dataComponents/buttonsLifeSelfmanagement.json';
import {useEffect} from 'react';
import ProfileContext from '~/context/Profile/ProfileContext';

export function ButtonsVidaUss() {
  /* Hooks of Context for read Profile of User  */
  const {userProfile, getUserProfile, getProfiles} = React.useContext(ProfileContext);

  useEffect(() => {
    getProfiles();
    getUserProfile();
  }, []);

  const contents = renderButtonVidaUss.find(p => p.profileId == userProfile).VidaUSS;
  return (
    <>
      {contents.map(data => (
        <ButtonSupportingText
          key={data.id}
          iconName={data.iconName}
          iconLabel={data.iconLabel}
          supportingText={data.supportingText}
          event={() => Linking.openURL(data.linkTo)}
        />
      ))}
    </>
  );
}

export function LifeUss() {
  return (
    <ScrollView style={{backgroundColor: '#F9FAFB'}}>
      <LineSeparator />
      <ButtonsVidaUss />
    </ScrollView>
  );
}
