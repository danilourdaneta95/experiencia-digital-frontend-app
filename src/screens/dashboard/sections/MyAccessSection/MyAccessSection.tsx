import ButtonAccess from 'components/core/buttons/ButtonAccess';
import ProfileContext from 'context/Profile/ProfileContext';
import React, {useContext, useState} from 'react';
import {Linking, StyleSheet, View} from 'react-native';
import {Theme} from 'styles/Theme';
import renderComponents from 'data/controlRender/renderComponents.json';
import TitleIcon from '~/components/core/titleIcon/TitleIcon';
import dataMyAccess from 'data/dataComponents/buttonsMyAccesses.json';

export default function MyAccessSection() {
  /* Hooks of Context for read Profile of User  */
  const {userProfile} = useContext(ProfileContext);
  /* Create State of data.MyAccess of RenderComponents. */ const [renderCard] = useState(renderComponents.MyAccess);
  const renderListProfiles = renderCard.map(data => data.id);
  const isRender = renderCard.map(data => data.render);
  // const linkRender = data.EgresadosMisAccesos.map(data => data.linkTo);  if (userProfile == renderListProfiles[userProfile] && isRender[userProfile]) {
  if (userProfile == renderListProfiles[userProfile] && isRender[userProfile]) {
    return (
      <View style={styles.container}>
        <TitleIcon iconName="global-line" text="Mis accesos" />
        {dataMyAccess.EgresadosMisAccesos.map((data, index) => (
          <ButtonAccess
            key={index}
            iconName={data.iconName}
            iconColor="#344054"
            iconSize="24"
            labelContent={data.labelContent}
            event={() => Linking.openURL(data.linkTo)}
          />
        ))}
      </View>
    );
  } else {
    return null;
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: `${Theme.sections.bgSections}`,
    width: '100%',
    height: 'auto',
    paddingHorizontal: Theme.sections.paddingHorizontal,
    marginBottom: Theme.sections.marginBottom,
  },
  containerButtons: {
    marginBottom: 26,
  },
});
