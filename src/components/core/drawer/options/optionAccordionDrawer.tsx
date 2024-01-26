import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Linking} from 'react-native';
import DrawerOption from './optionDrawer';
import Accordion from 'react-native-collapsible/Accordion';
import Icon from 'react-native-remix-icon';
import {Theme} from '~/styles/Theme';
import {CONSTANTS} from '~/settings/Constants';

interface OptionAccordionDrawerProps {
  iconName?: string;
  iconSize?: string;
  iconColor?: string;
  labelContent?: string;
  fontColor?: string;
  marginBottom?: number;
  disable?: boolean;
  pageName?: string;
  options: any[];
  event?: () => void;
  linkTo?: string;
}

interface OptionAccordionDrawerStylesProps extends OptionAccordionDrawerProps {
  color?: string;
}

interface sectionsData {
  items: any[];
}

interface activeSection {
  activeSections: never[];
}

const OptionAccordionDrawer = (props: OptionAccordionDrawerProps) => {
  const [sections] = useState<sectionsData>({
    items: props.options,
  });
  const [state, setState] = useState<activeSection>({
    activeSections: [],
  });

  const _renderHeader = () => {
    return (
      <>
        <View style={[styles(props).headerContainer, props.disable ? styles(props).disable : null]}>
          <DrawerOption
            {...props}
            labelContent={props.labelContent}
            iconName={props.iconName}
            pageName={props.pageName}
          />
          <Icon
            name={state.activeSections.length == 0 ? 'arrow-down-s-line' : 'arrow-up-s-line'}
            color={
              props.disable
                ? Theme.ButtonsMainDraWer.colorDisable
                : props.iconColor || Theme.ButtonsMainDraWer.iconColor
            }
            size={props.iconSize || Theme.ButtonsMainDraWer.iconSize}
            style={styles(props).arrowIcon}
          />
        </View>
      </>
    );
  };

  const _renderContent = () => {
    // Todo: conseguir en json si la navegación es interna o externa
    return (
      <>
        <TouchableOpacity
          onPress={(): void => {
            Linking.openURL(CONSTANTS.ROUTES.AUTOSERVICIO);
          }}
          activeOpacity={1}
          style={styles(props).optionsContent}
        >
          <Text style={styles(props).labelOption}>Autoservicio</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={(): void => {
            Linking.openURL(CONSTANTS.ROUTES.MIS_ARANCELES);
          }}
          activeOpacity={1}
          style={styles(props).optionsContent}
        >
          <Text style={styles(props).labelOption}>Mis Aranceles</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={(): void => {
            Linking.openURL(CONSTANTS.ROUTES.MIS_CALIFICACIONES);
          }}
          activeOpacity={1}
          style={styles(props).optionsContent}
        >
          <Text style={styles(props).labelOption}>Registro académico</Text>
        </TouchableOpacity>
      </>
    );
  };

  const _updateSections = (activeSections: never[]) => {
    setState({activeSections});
  };

  return (
    <Accordion
      key={1}
      sections={[sections]}
      activeSections={state.activeSections}
      renderHeader={_renderHeader}
      renderContent={_renderContent}
      onChange={_updateSections}
      touchableComponent={TouchableOpacity}
      touchableProps={{activeOpacity: 1}}
    />
  );
};

export const styles = (props: OptionAccordionDrawerStylesProps) =>
  StyleSheet.create({
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginBottom: props.marginBottom || Theme.ButtonsMainDraWer.marginButton,
      height: 40,
      borderRadius: 6,
    },
    arrowIcon: {
      position: 'absolute',
      right: 5,
    },
    optionsContent: {
      marginLeft: 50,
      marginVertical: 10,
    },
    disable: {
      backgroundColor: `${Theme.ButtonsMainDraWer.bgColorDisable}`,
      color: `${Theme.ButtonsMainDraWer.colorDisable}`,
    },
    labelOption: {
      color: `${Theme.headerDrawer.colorName}`,
    },
  });

export default OptionAccordionDrawer;
