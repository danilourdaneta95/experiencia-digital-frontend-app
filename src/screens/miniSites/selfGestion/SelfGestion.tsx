import * as React from 'react';
import ButtonSupportingText from 'components/core/buttons/supportingText/ButtonSupportingText';
import LineSeparator from 'components/core/lineSeparator/LineSeparator';
import {Linking, ScrollView} from 'react-native';
import renderButtonAutogestion from 'data/dataComponents/buttonsLifeSelfmanagement.json';
import {useEffect} from 'react';
import ProfileContext from '~/context/Profile/ProfileContext';

export function ButtonsSelfGestion() {
  /* Hooks of Context for read Profile of User  */
  const {userProfile, getUserProfile, getProfiles} = React.useContext(ProfileContext);

  useEffect(() => {
    getProfiles();
    getUserProfile();
  }, []);

  const contents = renderButtonAutogestion.find(p => p.profileId == userProfile).Autogestion;
  return (
    <>
      {contents.map(data => (
        <ButtonSupportingText
          key={data.id}
          iconName={data.iconName}
          iconLabel={data.iconLabel}
          supportingText={data.supportingText}
          linkTo={data.linkTo}
          event={() => Linking.openURL(data.linkTo)}
        />
      ))}
    </>
  );
}

export function SelfGestion() {
  return (
    <ScrollView style={{backgroundColor: '#F9FAFB'}}>
      <LineSeparator />
      <ButtonsSelfGestion />
    </ScrollView>
  );
}
