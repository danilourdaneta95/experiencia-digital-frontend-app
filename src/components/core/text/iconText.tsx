import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-remix-icon';
import globalStyles from '~/styles/GlobalStyles';

interface IconTextProps {
  icon?: string;
  strongText?: string;
  normalText: string;
  bgColor?: string;
  textColor: string;
}

interface StylesProps extends IconTextProps {
  color?: string;
}

const IconText = (props: IconTextProps) => {
  return (
    <View style={styles(props).container}>
      {props.icon != null && <Icon name={props.icon} size={16} color={props.textColor} style={styles(props).icon} />}
      {props.strongText != null && (
        <Text style={[globalStyles.title_6, globalStyles.text_strong, styles(props).text]}>{props.strongText}</Text>
      )}
      <Text style={[globalStyles.title_6, globalStyles.text_normal, styles(props).text]}>{props.normalText}</Text>
    </View>
  );
};
export const styles = (props: StylesProps) =>
  StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 12,
      paddingHorizontal: 10,
      paddingVertical: 2,
      marginBottom: 5,
      backgroundColor: props.bgColor,
    },
    text: {
      color: props.textColor,
    },
    icon: {
      color: props.textColor,
      marginRight: 8,
    },
  });

export default IconText;
