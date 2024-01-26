import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import Icon from 'react-native-remix-icon';

interface CustomAccordionProps {
  title: string;
  children: any
  active?: boolean
  event: () => void;
}

interface CustomAccordionStylesProps {
  active?: boolean;
}

const CustomAccordion = (props: CustomAccordionProps) => {
  const [state, setState] = useState({
    activeSections: [],
  });
  const [active, setActive] = useState<boolean>();

  useEffect(() => {
    const activeSections: any = [];
    if (props.active) {
      activeSections.push(0);
    }
    setState({ activeSections });
  }, [props.active]);

  useEffect(() => {
    setActive(state.activeSections.length > 0 ? true : false);
  }, [state]);

  const _renderHeader = () => {
    return (
      <View style={styles({active}).titleContainer}>
        <Text style={styles({active}).titleText}>
          {props.title}
        </Text>
        <View style={styles({active}).icon}>
          <Icon name={'arrow-down-s-line'} size={20} color={'#58616E'} />
        </View>
      </View>
    );
  };

  const _renderContent = () => {
    return (
      <>
        <View style={styles({active}).content}>
          {props.children}
        </View>
      </>
    );
  };

  const _updateSections = (activeSections: never[]) => {
    setState({activeSections});
    props.event();
  };

  return (
    <Accordion
      sections={[props.title]}
      activeSections={state.activeSections}
      renderHeader={_renderHeader}
      renderContent={_renderContent}
      onChange={_updateSections}
      touchableComponent={TouchableOpacity}
      touchableProps={{activeOpacity: 1}}
    />
  );
};

export const styles = (props: CustomAccordionStylesProps) =>
  StyleSheet.create({
    titleContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 12,
      paddingVertical: 18,
      gap: 8,
      backgroundColor: props.active ? '#E4E8FC' : '#FFFFFF',
      borderBottomWidth: 1,
      borderBottomColor: '#d4d6d9',
      width: '100%'
    },
    titleText: {
      fontFamily: 'Karla-Bold',
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 28,
      color: props.active ? '#001894' : '#0b141f'
    },
    content: {
      paddingHorizontal: 18,
      paddingVertical: 12,
      backgroundColor: '#f2f4f7'
    },
    icon: {
      transform: [{ rotate: (props.active ? '180deg' : '0deg')}]
    }
  });

export default CustomAccordion;
