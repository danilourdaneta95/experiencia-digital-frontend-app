import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import ImgBgButton from 'assets/backgroundButton/bgButtonLabel.svg';
import Icon from 'react-native-remix-icon';

interface ButtonIconProps {
  labelText: string;
  iconName: string;
  iconColor: string;
  iconSize: number;
  event?: () => void;
}

function ButtonIcon(props: ButtonIconProps) {
  return (
    <>
      <View style={[styles.container]}>
        <TouchableOpacity style={[styles.buttonContainer]} onPress={() => props.event()} activeOpacity={1}>
          <ImgBgButton style={[styles.imgContainer]} />
          <View style={[styles.icon]}>
            <Icon name={props.iconName} size={props.iconSize} color={props.iconColor} style={{marginBottom: 14}} />
            <Text style={[styles.h5]}>{props.labelText}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: Platform.OS === 'ios' ? 'center' : 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Platform.OS === 'ios' ? 0 : 14,
  },
  imgContainer: {
    height: 108,
    width: 156,
  },
  icon: {
    position: 'absolute',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
  },
  h5: {
    flex: 1,
    alignItems: 'center',
    color: '#001894',
    flexDirection: 'column',
    textAlign: 'center',
    fontFamily: 'Karla-Bold',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default ButtonIcon;
