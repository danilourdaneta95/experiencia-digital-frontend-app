import * as React from 'react';
import {useContext, useEffect} from 'react';
import ProfileContext from '~/context/Profile/ProfileContext';
import {View, StyleSheet, Text, TouchableOpacity, Linking} from 'react-native';
import {BackLayout} from '~/layouts/BackLayout';
import {CONSTANTS} from '~/settings/Constants';
import Icon from 'react-native-remix-icon';
import Ilustra from '~/assets/ilutracion.svg';
import renderComponents from 'data/controlRender/renderComponents.json';

export default function AdvanceOnline() {
  /* Hooks of Context for read Profile of User  */
  const {userProfile, getUserProfile, getProfiles} = useContext(ProfileContext);
  const [renderCard] = React.useState(renderComponents.AdvanceOnline);
  const renderListProfiles = renderCard.map(data => data.id);
  const isRender = renderCard.map(data => data.render);

  useEffect(() => {
    getProfiles();
    getUserProfile();
  }, []);

  if (userProfile == renderListProfiles[userProfile] && isRender[userProfile]) {
    return (
      <>
        <View style={styles.backLayout}>
          <BackLayout>
            <Ilustra />
            <Text style={styles.text}>
              Recuerda revisar tus actividades semanales y sesiones sincrónicas en Blackboard
            </Text>
            <View style={styles.containerButton}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => Linking.openURL(CONSTANTS.ROUTES.BLACKBOARD)}
                activeOpacity={1}
              >
                <Text style={styles.h5}>Ir a Blackboard </Text>
                <Icon style={styles} name="arrow-right-line" color="#001894"></Icon>
              </TouchableOpacity>
            </View>
          </BackLayout>
        </View>
      </>
    );
  }
}

export const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'row', padding: 16},
  backLayout: {
    flexDirection: 'column-reverse',
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  containerButton: {
    alignItems: 'center',
    paddingTop: 40,
    paddingLeft: 100,
  },
  button: {
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
    backgroundColor: '#E4E8FC',
    padding: 10,
    fontWeight: '600',
    color: '#001894',
  },
  text: {
    color: '#101828',
    fontFamily: 'Karla-Regular',
    fontSize: 16,
  },
  h5: {
    alignItems: 'center',
    color: '#001894',
    flexDirection: 'row',
    textAlign: 'center',
    fontFamily: 'Karla-Bold',
    fontSize: 16,
  },
  icon: {
    flexDirection: 'row',
  },
});
