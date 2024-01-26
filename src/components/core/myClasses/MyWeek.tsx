import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import Icon from 'react-native-remix-icon';
import {CONSTANTS} from '~/settings/Constants';
import globalStyles from '~/styles/GlobalStyles';
import Tag from '../tag/Tag';

const MyWeek = () => {
  return (
    <Tag tagColor="#E4E8FC">
      <View style={[styles.borderRadius]}>
        <TouchableOpacity
          style={[globalStyles.row, globalStyles.align_center, globalStyles.gap6]}
          onPress={() => Linking.openURL(CONSTANTS.ROUTES.MI_SEMANA)}
        >
          <Text style={[globalStyles.title_5, globalStyles.text_normal, styles.text]}>Mi Semana</Text>
          <Icon name="calendar-line" size={24} color="#001894" />
        </TouchableOpacity>
      </View>
    </Tag>
  );
};
export const styles = StyleSheet.create({
  text: {
    color: '#001894',
    fontWeight: '600',
  },
  gap6: {
    gap: 6,
  },
  borderRadius: {
    borderRadius: 50,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
});

export default MyWeek;
