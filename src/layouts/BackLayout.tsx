import React from 'react';
import {View} from 'react-native';

export interface BackLayoutProps {
  children: React.ReactNode;
}

export function BackLayout(props: BackLayoutProps) {
  return (
    <View
      style={{
        width: 370,
        height: 350,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        borderColor: '#dceefa',
        borderWidth: 1,
      }}
    >
      {props.children}
    </View>
  );
}
