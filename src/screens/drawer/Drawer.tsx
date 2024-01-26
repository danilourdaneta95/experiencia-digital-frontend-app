import * as React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FooterDrawer from '~/components/core/drawer/FooterDrawer';
import HeaderDrawer from '~/components/core/drawer/HeaderDrawer';
import MainDrawer from '~/components/core/drawer/MainDrawer';

export default function CustomDrawer() {
  return (
    <SafeAreaView>
      <View style={{height: '100%'}}>
        <HeaderDrawer />
        <MainDrawer />
        <FooterDrawer />
      </View>
    </SafeAreaView>
  );
}
