import React from 'react';
import { View } from 'react-native';

interface TabContentProps {
  name: string
  title: string
  children: any
  navigation?: any
}

export default function TabContent(props: TabContentProps) {
  return (
    <View style={{ paddingTop: 20}}>
      {React.cloneElement(props.children, { navigation: props.navigation })}
    </View>
  );
}
