import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-remix-icon';
import {Theme} from '~/styles/Theme';

interface OptionDrawerProps {
  iconName?: string;
  iconSize?: string;
  iconColor?: string;
  labelContent?: string;
  fontColor?: string;
  marginBottom?: number;
  disable?: boolean;
  pageName?: string;
  navigation?: any;
  linkTo?: string;
  event?: () => void;
}

interface OptionDrawerStylesProps extends OptionDrawerProps {
  color?: string;
}

const OptionDrawer = (props: OptionDrawerProps) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={(): void => {
        props.event();
      }}
      style={[styles(props).container, props.disable ? styles(props).disable : null]}
    >
      <Icon
        name={props.iconName}
        size={props.iconSize || Theme.ButtonsMainDraWer.iconSize}
        color={
          props.disable ? Theme.ButtonsMainDraWer.colorDisable : props.iconColor || Theme.ButtonsMainDraWer.iconColor
        }
      />
      <Text style={[styles(props).text, props.disable ? styles(props).disable : null]}>{props.labelContent}</Text>
    </TouchableOpacity>
  );
};
export const styles = (props: OptionDrawerStylesProps) =>
  StyleSheet.create({
    Maincontainer: {},
    container: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      paddingHorizontal: 12,
      paddingVertical: 8,
      marginBottom: props.marginBottom || Theme.ButtonsMainDraWer.marginButton,
      alignItems: 'center',
      height: 40,
      borderRadius: 6,
    },
    text: {
      fontFamily: 'Montserrat-Bold',
      fontWeight: '600',
      fontSize: 14,
      marginLeft: 12,
      color: `${props.fontColor || `${Theme.ButtonsMainDraWer.fontColor}`}`,
    },
    disable: {
      backgroundColor: `${Theme.ButtonsMainDraWer.bgColorDisable}`,
      color: `${Theme.ButtonsMainDraWer.colorDisable}`,
    },
  });

export default OptionDrawer;
