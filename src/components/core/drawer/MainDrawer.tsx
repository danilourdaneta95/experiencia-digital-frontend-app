/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import ButtonsMainDrawer from '~/components/core/buttons/buttonsMainDrawer/ButtonsMainDrawer';

interface HeaderDrawerProps {
  some?: any;
}

interface StylesProps extends HeaderDrawerProps {
  color?: string;
}

export default function MainDrawer(props: HeaderDrawerProps & StylesProps) {
  return (
    <>
      <ScrollView style={styles(props).container}>
        <ButtonsMainDrawer />
      </ScrollView>
    </>
  );
}

export const styles = (props: StylesProps) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      paddingTop: 16,
      height: '50%',
    },
  });
