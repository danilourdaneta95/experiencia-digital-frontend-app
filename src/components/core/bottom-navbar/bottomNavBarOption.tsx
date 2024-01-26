import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-remix-icon';
import globalStyles from '~/styles/GlobalStyles';

interface BottomNavBarOptionProps {
  icon: string;
  text: string;
  event: () => void;
  active: boolean;
}

const BottomNavBarOption = (props: BottomNavBarOptionProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={1} onPress={(): void => props.event()}>
        <Icon name={props.icon} size={22} color={props.active ? '#001894' : '#000'} style={styles.icon} />
        <Text
          style={[
            globalStyles.title_6,
            globalStyles.text_center,
            styles.text,
            props.active ? styles.text_active : null,
          ]}
        >
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    textAlign: 'center',
    alignSelf: 'center',
  },
  text: {
    fontSize: 9,
    marginTop: -3,
    color: '#000',
  },
  text_active: {
    color: '#001894',
  },
});

export default BottomNavBarOption;
