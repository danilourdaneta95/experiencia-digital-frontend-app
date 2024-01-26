import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import ButtonActivities from '~/components/customs/buttonActivities';
import ButtonQualifications from '~/components/customs/buttonQualification';

export default function QualificationAndActivities() {
  return (
    <>
      <View style={styles.container}>
        <ButtonQualifications />
        <ButtonActivities />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
  },
});
