import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Logo from 'assets/emoticon/initialGreetingEmoji.svg';
import {useContext, useEffect} from 'react';
import ProfileContext from 'context/Profile/ProfileContext';

interface GreetingsProps {
  togglePerfilPicker: any;
  showModalAndPicker: any;
}

export default function Greetings(props: GreetingsProps) {
  const {isTestEnvironment, getTestEnvironment, getUserData, user} = useContext(ProfileContext);
  const togglePerfilPicker = props.togglePerfilPicker;
  const toggleSelect = togglePerfilPicker;
  const isShowPicker = () => {
    toggleSelect();
  };

  useEffect(() => {
    /* A function that is called to now State of Test Environment Global */
    getTestEnvironment();
    getUserData();
  }, []);

  if (isTestEnvironment === true) {
    return (
      <>
        <View style={styles.container}>
          <TouchableOpacity style={styles.isTest} onPress={isShowPicker} activeOpacity={1}>
            <Logo width={34} height={34} />
          </TouchableOpacity>
          <Text style={styles.h3}>Hola, {user.firstname}</Text>
        </View>
      </>
    );
  }

  if (isTestEnvironment !== true) {
    return (
      <>
        <View style={styles.container}>
          <Logo width={34} height={34} />
          <Text style={styles.h3}>Hola, {user.firstname}</Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  isTest: {
    backgroundColor: 'rgba(102, 112, 133, 0.5)',
    borderRadius: 8,
    overflow: 'hidden',
    padding: 2,
  },
  h3: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 16,
    color: '#000',
  },
});
