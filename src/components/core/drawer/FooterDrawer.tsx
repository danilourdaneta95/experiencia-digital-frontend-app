import * as React from 'react';
import {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import Icon from 'react-native-remix-icon';
import {Theme} from 'styles/Theme';
import AuthContext from '~/context/Auth/AuthContext';
import {CONSTANTS} from '~/settings/Constants';

interface FooterDrawerProps {
  iconName?: string;
  iconSize?: string;
  iconColor?: string;
  labelContent?: string;
  fontColor?: string;
  marginBottom?: number;
  bgColor?: string;
}

interface StylesProps extends FooterDrawerProps {
  color?: string;
}

export default function FooterDrawer(props: FooterDrawerProps) {
  /* Hooks of Context for call SignOut function  */
  const {SignOut} = useContext(AuthContext);

  return (
    <>
      <View style={styles(props).viewContainer}>
        <TouchableOpacity
          style={styles(props).containerHelp}
          onPress={() => Linking.openURL(CONSTANTS.ROUTES.FEEDBACK)}
          activeOpacity={1}
        >
          <Icon
            name={props.iconName || 'messenger-line'}
            size={props.iconSize || Theme.ButtonsFooterDrawerFeed.iconSize}
            color={props.iconColor || Theme.ButtonsFooterDrawerFeed.iconColor}
          />
          <View>
            <Text style={styles(props).textFeedback}>Danos tu Feedback</Text>
            <Text style={styles(props).textComment}>Deja aquí tus comentarios</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles(props).container}
          onPress={() => Linking.openURL(CONSTANTS.ROUTES.SOPORTE_TECNICO)}
          activeOpacity={1}
        >
          <Icon
            name={props.iconName || 'phone-line'}
            size={props.iconSize || Theme.ButtonsFooterDrawer.iconSize}
            color={props.iconColor || Theme.ButtonsFooterDrawer.iconColor}
          />
          <View style={styles(props).labelContainer}>
            <Text style={styles(props).textHelp}>Ayuda y Soporte</Text>
            <Text style={styles(props).textCall}>600 771 3000</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles(props).container} onPress={() => SignOut()} activeOpacity={1}>
          <Icon
            name={props.iconName || 'logout-box-r-line'}
            size={props.iconSize || Theme.ButtonsFooterDrawer.iconSize}
            color={props.iconColor || Theme.ButtonsFooterDrawer.iconColor}
          />
          <View style={styles(props).labelContainer}>
            <Text style={styles(props).textHelp}>Cerrar sesión</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

export const styles = (props: StylesProps) =>
  StyleSheet.create({
    viewContainer: {
      paddingHorizontal: 16,
      paddingTop: 16,
      height: 'auto',
      borderTopWidth: 1,
      borderTopColor: '#EAECF0',
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      paddingHorizontal: 12,
      paddingVertical: 8,
      marginBottom: props.marginBottom || Theme.ButtonsFooterDrawer.marginButton,
      alignItems: 'center',
      height: 'auto',
    },
    labelContainer: {},
    textHelp: {
      fontFamily: 'Montserrat-Bold',
      fontSize: 14,
      marginLeft: 12,
      color: `${props.fontColor || `${Theme.ButtonsFooterDrawer.fontColor}`}`,
    },
    textCall: {
      fontFamily: 'Montserrat-Regular',
      fontSize: 14,
      marginLeft: 12,
      marginTop: 10,
      color: `${props.fontColor || `${Theme.ButtonsFooterDrawer.SupportingText}`}`,
    },
    containerHelp: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      borderRadius: 6,
      padding: 13,
      marginBottom: 8,
      paddingHorizontal: 12,
      backgroundColor: `${props.bgColor || `${Theme.ButtonsFooterDrawerFeed.bgColor}`}`,
    },
    textFeedback: {
      fontFamily: 'Montserrat-Bold',
      marginLeft: 12,
      marginBottom: 4,
      color: `${props.fontColor || `${Theme.ButtonsFooterDrawerFeed.fontColor}`}`,
    },
    textComment: {
      fontFamily: 'Montserrat-Regular',
      marginLeft: 12,
      color: `${props.fontColor || `${Theme.ButtonsFooterDrawerFeed.fontColor}`}`,
    },
  });
