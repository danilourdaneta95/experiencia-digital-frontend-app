import * as React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Theme} from 'styles/Theme';
import JobsSection from './sections/JobsUssSection/JobsUssSection';
import MyAccessSection from './sections/MyAccessSection/MyAccessSection';
import QualificationAndActivities from './sections/qualificationAndActivities';
import AdvanceOnline from '../dashboard/sections/advanceOnline/AdvanceOnline';
import {useContext, useEffect} from 'react';
import AuthContext from '~/context/Auth/AuthContext';
import MyClasses from './sections/MyClasses/MyClasses';
import ProfileContext from '~/context/Profile/ProfileContext';

export default function Dashboard() {
  const {getApiAccessToken} = useContext(AuthContext);
  const {getUserData, userProfile} = useContext(ProfileContext);

  useEffect(() => {
    getApiAccessToken();
    getUserData();
  }, [userProfile]);
  return (
    <>
      <ScrollView style={styles.container}>
        <MyClasses />
        <AdvanceOnline />
        <QualificationAndActivities />
        <JobsSection />
        <MyAccessSection />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Theme.dashboard.marginTop,
    backgroundColor: `${Theme.dashboard.backgroundColor}`,
    paddingHorizontal: 0,
  },
});
