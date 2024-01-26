import {StyleSheet, Text, View, TouchableOpacity, Linking, StatusBar} from 'react-native';
import Icon from 'react-native-remix-icon';
import {ButtonLogin} from '~/components/core/buttons/buttonsLogin/ButtonsLogin';
import BgLogin from 'assets/backgroundLogin/backgroundLogin.svg';
import LogoLogIn from 'assets/logo/UniversidadSanSebastianLogo.svg';
import LineSeparator from '~/components/core/lineSeparator/LineSeparator';
import {Theme} from '~/styles/Theme';
import {CONSTANTS} from '~/settings/Constants';
import {useContext, useEffect} from 'react';
import AuthContext from '~/context/Auth/AuthContext';
import SkeletonPostLogIn from 'assets/postLogIn/postLogIn.svg';

export function LogIn() {
  const {SignIn, azureAccessToken, getAzureAccessToken, isLoggedIn} = useContext(AuthContext);

  useEffect(() => {
    getAzureAccessToken();
  }, [azureAccessToken]);

  if (!isLoggedIn) {
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#ffffff" />
        <BgLogin style={styles.bgImg} />
        <View style={[styles.container, styles.shadow]}>
          <View style={styles.containerCard}>
            <LogoLogIn width={220} style={styles.USSLogo} />
            <Text style={styles.titleH4}>Te damos la bienvenida a {'\n'} Mi USS</Text>
            <ButtonLogin
              labelText={'Ingresar'}
              iconName={'windows-line'}
              iconSize={'18'}
              iconColor={'#E4E8FC'}
              fontColor={'#E4E8FC'}
              buttonHeight={54}
              bgButtonColor={'#001894'}
              event={() => SignIn()}
            ></ButtonLogin>
            <ButtonLogin
              labelText={'Cambiar clave'}
              iconName={'key-2-line'}
              iconSize={'21'}
              iconColor={'#001894'}
              fontColor={'#001894'}
              buttonHeight={54}
              bgButtonColor={'#C5CDF9'}
              event={() => Linking.openURL(CONSTANTS.ROUTES.CHANGE_PASSWORD)}
            ></ButtonLogin>
            <LineSeparator />
            <View style={styles.bottomSection}>
              <Icon name={'question-line'} size={16} color={'#475467'} />
              <TouchableOpacity onPress={() => Linking.openURL(CONSTANTS.ROUTES.SOPORTE_TECNICO)} activeOpacity={1}>
                <Text style={styles.pBottom}>¿Necesitas soporte?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  } else
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#ffffff" />
        <View style={styles.pageLoading}>
          <SkeletonPostLogIn style={[styles.skeletonPostLogIn]} />
        </View>
      </>
    );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 48,
  },
  bgImg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  containerCard: {
    backgroundColor: 'rgba(255,255,255, 0.6)',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    borderRadius: 24,
  },
  USSLogo: {
    marginTop: 40,
  },
  shadow: {
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.6,
    elevation: 4,
  },
  bottomSection: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 28,
  },
  titleH4: {
    fontFamily: 'Montserrat-Bold',
    fontWeight: '600',
    fontSize: Theme.FontSize.h4,
    color: '#102B41',
    marginBottom: 44,
    marginTop: 33,
    textAlign: 'center',
  },
  pBottom: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: '700',
    fontSize: 14,
    color: '#475467',
    marginLeft: 11,
  },
  pageLoading: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },

  skeletonPostLogIn: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
