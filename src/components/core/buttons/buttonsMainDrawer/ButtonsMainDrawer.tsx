/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Linking} from 'react-native';
import {Theme} from 'styles/Theme';
import ProfileContext from '~/context/Profile/ProfileContext';
import renderButtonSidebar from 'data/dataComponents/buttonsSidebar.json';
import OptionAccordionDrawer from '../../drawer/options/optionAccordionDrawer';
import OptionDrawer from '../../drawer/options/optionDrawer';

interface ButtonsMainDrawerProps {
  iconName?: string;
  iconSize?: string;
  iconColor?: string;
  labelContent?: string;
  fontColor?: string;
  marginBottom?: number;
}

interface StylesProps extends ButtonsMainDrawerProps {
  color?: string;
}

export default function ButtonsMainDrawer(props: ButtonsMainDrawerProps) {
  /* Hooks of Context for read Profile of User  */
  const {userProfile, getUserProfile, getProfiles} = useContext(ProfileContext);
  const [contents, setContents] = useState<any>();

  useEffect(() => {
    getProfiles();
    getUserProfile();
  }, []);

  useEffect(() => {
    setContents(renderButtonSidebar.find(p => p.profileId == userProfile)?.content);
  }, [userProfile]);

  return (
    <>
      <View style={styles(props).Maincontainer}>
        {contents?.map((data, index) =>
          data.isAccordion ? (
            <OptionAccordionDrawer
              labelContent={data.labelContent}
              iconName={data.iconName}
              pageName={data.pageName}
              disable={data.disabled}
              options={data.content}
              key={index}
            />
          ) : (
            <OptionDrawer
              labelContent={data.labelContent}
              iconName={data.iconName}
              pageName={data.pageName}
              disable={data.disabled}
              key={index}
              event={() => {
                Linking.openURL(data.linkTo);
                console.log(Linking.openURL(data.linkTo));
              }}
            />
          ),
        )}
      </View>
    </>
  );
}

export const styles = (props: StylesProps) =>
  StyleSheet.create({
    Maincontainer: {},
    container: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      paddingHorizontal: 12,
      paddingVertical: 8,
      marginBottom: props.marginBottom || Theme.ButtonsMainDraWer.marginButton,
      alignItems: 'center',
      height: 40,
    },
    text: {
      fontFamily: 'Montserrat-Bold',
      fontWeight: '600',
      fontSize: 14,
      marginLeft: 12,
      color: `${props.fontColor || `${Theme.ButtonsMainDraWer.fontColor}`}`,
    },
  });
