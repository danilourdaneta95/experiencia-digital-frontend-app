import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

interface CardProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Card = (props: CardProps) => {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignSelf: 'center',
    paddingVertical: 16,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    borderRadius: 8,
    width: '99%',
    borderColor: '#E1EEF8',
    borderWidth: 1,
  },
});

export default Card;
