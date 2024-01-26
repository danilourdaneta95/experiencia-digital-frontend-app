import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-remix-icon';

interface ButtonLoginProps {
  labelText: string;
  iconName: string;
  iconSize: string;
  iconColor: string;
  fontColor?: string;
  buttonHeight?: number;
  bgButtonColor: string;
  event?: () => void;
}
interface StylesProps extends ButtonLoginProps {
  fontColor?: string;
  color?: string;
}

export function ButtonLogin(props: ButtonLoginProps) {
  return (
    <>
      <View style={[styles(props).container]}>
        <TouchableOpacity style={[styles(props).buttonContainer]} onPress={() => props.event()} activeOpacity={1}>
          <Text style={[styles(props).h5]}>{props.labelText}</Text>
          <Icon name={props.iconName} size={props.iconSize} color={props.iconColor} />
        </TouchableOpacity>
      </View>
    </>
  );
}
export const styles = (props: StylesProps) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      height: props.buttonHeight,
      backgroundColor: `${props.bgButtonColor}`,
      borderRadius: 50,
      margin: 16,
    },
    h5: {
      color: `${props.fontColor}`,
      fontFamily: 'Montserrat-Bold',
      fontSize: 16,
      flexDirection: 'row',
      flex: 0.85,
    },
  });
