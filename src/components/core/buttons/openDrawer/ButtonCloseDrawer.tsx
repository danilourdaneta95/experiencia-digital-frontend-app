import * as React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import Icon from 'react-native-remix-icon';

export default function ButtonCloseDrawer() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.button}
      onPressIn={() => navigation.dispatch(DrawerActions.closeDrawer())}
      activeOpacity={1}
    >
      <Icon name="arrow-right-line" size="20" color="#475467" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F9FAFB',
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});
