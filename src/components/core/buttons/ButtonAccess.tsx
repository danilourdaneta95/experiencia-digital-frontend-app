import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-remix-icon';
import {Theme} from 'styles/Theme';
interface ButtonAccessProps {
  iconName: string;
  iconSize: string;
  iconColor: string;
  labelContent: string;
  event?: () => void;
}
function ButtonAccess(props: ButtonAccessProps) {
  return (
    <>
      <View style={[styles.container, styles.shadow]}>
        <TouchableOpacity style={[styles.appButton]} onPress={() => props.event()} activeOpacity={1}>
          <Text style={[styles.h5]}>{props.labelContent}</Text>
          <Icon name={props.iconName} size={props.iconSize} color={props.iconColor} />
        </TouchableOpacity>
      </View>
    </>
  );
}
// return <View>{ButtonAccessData}</View>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 60,
    marginBottom: 11,
    backgroundColor: `${Theme.ButtonAccess.containerBgColor}`,
    borderRadius: 10,
  },
  appButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  h5: {
    flex: 1,
    color: `${Theme.ButtonAccess.h5Color}`,
    fontFamily: `${Theme.ButtonAccess.h5FontFamily}`,
    fontWeight: `${Theme.ButtonAccess.h5FontWeight}`,
    fontSize: 16,
  },
  shadow: {
    shadowColor: 'gba(0, 0, 0, 0.05)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.6,
    elevation: 4,
  },
});
export default ButtonAccess;
