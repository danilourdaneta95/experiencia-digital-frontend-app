import React, {useContext, useEffect, useState} from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, View, Linking} from 'react-native';
import BottomNavBarOption from './bottomNavBarOption';
import Icon from 'react-native-remix-icon';
import DropShadow from 'react-native-drop-shadow';
import globalStyles from '~/styles/GlobalStyles';
import {Theme} from '~/styles/Theme';
import ModalContext from '~/context/Modal/ModalContext';
import {Screens} from '~/settings/Screens';
import Credential from '~/components/customs/credentials/Credentials';
import {CONSTANTS} from '~/settings/Constants';
import apolloClient from '~/settings/Apollo';
import {gqlCredential} from '~/gql';
import {GetCredencial} from '~/types/credential';

interface BottomNavBarProps {
  navigation: any;
}

const BottomNavBar = (props: BottomNavBarProps) => {
  const [option, setOption] = useState(1);
  const {setStateModal} = useContext(ModalContext);
  const [credentialModal, setCredentialModal] = React.useState(false);
  const [data, setData] = useState<GetCredencial>();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    apolloClient
      .query({
        query: gqlCredential.queries.GET_GQL_CREDENTIAL,
      })
      .then(res => {
        setData(res.data.getCredencial);
      });
  };

  return (
    <>
      <Credential
        modalOpen={credentialModal}
        nameStudent={data?.nombre}
        rutStudent={data?.rut}
        QRurl={data?.url}
        sede={data?.sede}
        jornada={data?.jornada}
        carrera={data?.carrera}
      />
      <View style={styles.container}>
        <DropShadow style={styles.center_shadow}>
          <View style={styles.circle}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                setStateModal(true);
                setCredentialModal(true);
              }}
            >
              <Icon name="qr-code-line" size={24} color="#001894" />
            </TouchableOpacity>
          </View>
        </DropShadow>
        <View style={[globalStyles.row]}>
          <DropShadow style={styles.side_shadow}>
            <View style={[styles.left_side, globalStyles.row]}>
              <BottomNavBarOption
                text="Inicio"
                icon="home-6-line"
                active={option == 1}
                event={() => {
                  setOption(1);
                  props.navigation.navigate(Screens.Name.Home);
                }}
              />
              <BottomNavBarOption
                text="Vida USS"
                icon="open-arm-line"
                active={option == 2}
                event={() => {
                  setOption(2);
                  props.navigation.navigate(Screens.Name.LifeUss);
                }}
              />
            </View>
          </DropShadow>
          <View style={styles.center_side_left_container}>
            <View style={styles.center_side_left_radius} />
          </View>
          <View style={styles.center_side_right_container}>
            <View style={styles.center_side_right_radius} />
          </View>
          <DropShadow style={styles.side_shadow}>
            <View style={[styles.right_side, globalStyles.row]}>
              <BottomNavBarOption
                text="Autogestión"
                icon="book-open-line"
                active={option == 3}
                event={() => {
                  setOption(3);
                  props.navigation.navigate(Screens.Name.SelfGestion);
                }}
              />
              <BottomNavBarOption
                text="Mi correo"
                icon="mail-line"
                active={option == 4}
                event={() => {
                  setOption(4);
                  Linking.openURL(CONSTANTS.ROUTES.OUTLOOK_MAIL);
                }}
              />
            </View>
          </DropShadow>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    width: '100%',
    position: 'absolute',
    zIndex: 0,
  },
  bg: {
    height: Theme.NavBar.height,
    width: '100%',
    resizeMode: 'stretch',
  },
  left_side: {
    width: Dimensions.get('window').width / 2 - Theme.NavBar.height / 2,
    height: Theme.NavBar.height,
    backgroundColor: `${Theme.NavBar.bgColor}`,
    borderTopRightRadius: 5,
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 5,
    zIndex: 0,
  },
  right_side: {
    width: Dimensions.get('window').width / 2 - Theme.NavBar.height / 2,
    height: Theme.NavBar.height,
    backgroundColor: `${Theme.NavBar.bgColor}`,
    borderTopLeftRadius: 5,
    justifyContent: 'space-between',
    paddingLeft: 5,
    paddingRight: 20,
    zIndex: 0,
  },
  center_side_left_container: {
    width: Theme.NavBar.height / 2,
    height: Theme.NavBar.height,
    backgroundColor: `${Theme.NavBar.bgColor}`,
    alignItems: 'center',
    justifyContent: 'flex-start',
    zIndex: 1,
  },
  center_side_left_radius: {
    backgroundColor: `${Theme.sections.bgSections}`,
    height: Theme.NavBar.height / 2,
    width: Theme.NavBar.height / 2,
    alignSelf: 'flex-end',
    borderBottomLeftRadius: Theme.NavBar.height / 2,
    borderBottomLeftWitdh: 1,
    borderBottomLeftColor: 'black',
  },
  center_side_right_container: {
    width: Theme.NavBar.height / 2,
    height: Theme.NavBar.height,
    backgroundColor: `${Theme.NavBar.bgColor}`,
    alignItems: 'center',
    justifyContent: 'flex-start',
    zIndex: 1,
  },
  center_side_right_radius: {
    backgroundColor: `${Theme.sections.bgSections}`,
    height: Theme.NavBar.height / 2,
    width: Theme.NavBar.height / 2,
    alignSelf: 'flex-start',
    borderBottomRightRadius: Theme.NavBar.height / 2,
  },
  side_shadow: {
    shadowColor: '#808080',
    shadowOffset: {width: 0, height: -5},
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  center_shadow: {
    shadowColor: '#808080',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.2,
    shadowRadius: 6,
    zIndex: 2,
    marginBottom: -30,
  },
  circle: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: `${Theme.NavBar.bgColor}`,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    textAlignVertical: 'center',
    flex: 1,
    zIndex: 0,
  },
});

export default BottomNavBar;
