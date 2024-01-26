import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-remix-icon';
import globalStyles from '~/styles/GlobalStyles';

export default function NoClasses() {
  return (
    <View style={styles.container}>
      <Icon name="calendar-event-line" size={62} color="#667085" />
      <Text style={[globalStyles.body, styles.text]}>Hoy no registramos clases para ti</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F4F7',
    width: '100%',
    height: 'auto',
    paddingHorizontal: 30,
    paddingVertical: 50,
    marginVertical: 10,
    borderRadius: 12,
    textAlign: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#667085',
  },
});
