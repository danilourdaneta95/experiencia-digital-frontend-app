/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {View, StyleSheet, Text, Platform} from 'react-native';
import ButtonCloseDrawer from '../buttons/openDrawer/ButtonCloseDrawer';
import Icon from 'react-native-remix-icon';
import {useContext} from 'react';
import ProfileContext from '~/context/Profile/ProfileContext';

interface HeaderDrawerProps {
  some?: any;
}

interface StylesProps extends HeaderDrawerProps {
  color?: string;
}

export default function HeaderDrawer(props: HeaderDrawerProps & StylesProps) {
  const {user} = useContext(ProfileContext);
  return (
    <>
      <View style={styles(props).headerContainer}>
        <View style={styles(props).container}>
          <ButtonCloseDrawer />
        </View>
        <View style={styles(props).containerUser}>
          <View style={styles(props).userAvatar}>
            <Icon name="account-circle-line" size="20" color="#475467" />
          </View>
          <View style={styles(props).userProfile}>
            <Text style={styles(props).userName}>{user.fullname}</Text>
            <Text style={styles(props).userCareer}>{user.carrera}</Text>
            <Text style={styles(props).userEmail}>{user.email}</Text>
          </View>
        </View>
      </View>
    </>
  );
}

export const styles = (props: StylesProps) =>
  StyleSheet.create({
    headerContainer: {
      height: '18.5%',
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 8,
      paddingHorizontal: 10,
      marginTop: Platform.OS === 'ios' ? -12 : 0,
    },

    containerUser: {
      flexDirection: 'row',
      height: 82,
      justifyContent: 'center',
      paddingLeft: 16,
      paddingEnd: 16,
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#EAECF0',
    },

    userAvatar: {
      backgroundColor: '#EAECF0',
      width: 44,
      height: 44,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },

    userProfile: {
      flex: 1,
      height: '100%',
      marginLeft: 12,
      justifyContent: 'center',
    },

    userName: {
      color: '#344054',
      fontFamily: 'Montserrat-Bold',
      fontSize: 16,
      fontWeight: '600',
      lineHeight: 24,
    },

    userCareer: {
      color: '#667085',
      fontFamily: 'Montserrat-SemiBold',
      fontSize: 14,
      fontWeight: '500',
      lineHeight: 20,
    },

    userEmail: {
      color: '#667085',
      fontFamily: 'Montserrat-Light',
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 20,
    },
  });
