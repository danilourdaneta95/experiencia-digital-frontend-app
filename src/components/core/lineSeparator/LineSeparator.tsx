import * as React from 'react';
import {View} from 'react-native';

export default function LineSeparator() {
  return (
    <View
      style={{
        flex: 1,
        borderColor: '#EAECF0',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        marginHorizontal: 20,
      }}
    />
  );
}
