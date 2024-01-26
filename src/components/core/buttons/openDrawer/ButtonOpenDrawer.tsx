import * as React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import Icon from 'react-native-remix-icon';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    marginRight: 10,
    backgroundColor: '#F9FAFB',
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});

export default function ButtonOpenDrawer() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.button}
      onPressIn={() => navigation.dispatch(DrawerActions.openDrawer())}
      activeOpacity={1}
    >
      <Icon name="menu-3-line" size="20" color="#283341" />
    </TouchableOpacity>
  );
}
