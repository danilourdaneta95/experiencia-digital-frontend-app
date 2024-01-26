import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-remix-icon';
import {Theme} from 'styles/Theme';

export interface TitleIconProps {
  iconName: string;
  iconSize?: string;
  iconColor?: string;
  text: string;
}

function TitleIcon(props: TitleIconProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon
          name={props.iconName}
          size={`${props.iconSize || Theme.titleIcon.iconSize}`}
          color={`${props.iconColor || Theme.titleIcon.iconColor}`}
        />
      </View>
      <Text style={[styles.h5]}>{props.text}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 22,
    alignItems: 'center',
    marginHorizontal: -4,
    // backgroundColor: 'red',
  },
  iconContainer: {
    backgroundColor: `${Theme.titleIcon.containerBgColor}`,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    width: Theme.titleIcon.containerIconSize,
    height: Theme.titleIcon.containerIconSize,
  },
  h5: {
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '600',
    fontSize: 20,
    color: '#1D2939',
    textAlign: 'left',
  },
});

export default TitleIcon;
