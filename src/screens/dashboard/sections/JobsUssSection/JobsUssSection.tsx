import React, {useContext, useState} from 'react';
import {StyleSheet, View, Linking} from 'react-native';
import ProfileContext from 'context/Profile/ProfileContext';
import ButtonLabel from 'components/core/buttons/ButtonLabel/ButtonLabel';
import {Theme} from 'styles/Theme';
import renderComponents from 'data/controlRender/renderComponents.json';
import TitleIcon from '~/components/core/titleIcon/TitleIcon';

interface JobsSectionsProps {
  labelText?: string;
}

export default function JobsSection(props: JobsSectionsProps) {
  const url = 'https://portalempleo.uss.cl';
  /* Hooks of Context for read Profile of User  */
  const {userProfile} = useContext(ProfileContext);

  /* Create State of data.MyAccess of RenderComponents. */
  const [renderCard] = useState(renderComponents.JobsUss);
  const renderListProfiles = renderCard.map(data => data.id);
  const isRender = renderCard.map(data => data.render);

  if (userProfile == renderListProfiles[userProfile] && isRender[userProfile]) {
    return (
      <View style={styles.container}>
        <TitleIcon iconName="macbook-line" text="Empleos USS" />
        <View>
          <ButtonLabel labelText={props.labelText} event={() => Linking.openURL(url)} />
        </View>
      </View>
    );
  } else {
    null;
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
});
