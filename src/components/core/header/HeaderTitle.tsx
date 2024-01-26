import {NavigationContext} from '@react-navigation/native';
import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-remix-icon';
import {Theme} from '~/styles/Theme';

interface HeaderProps {
  text: string;
}

export default function HeaderTitle(props: HeaderProps) {
  const navigation = React.useContext(NavigationContext);

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={1}>
          <Icon name="arrow-left-s-line" color={'#283341'} width={8} height={12} />
        </TouchableOpacity>
        <Text style={[styles.text]}>{props.text}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 16,
    color: '#283341',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: Theme.FontSize.h3,
  },
});
