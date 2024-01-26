import LineSeparator from 'components/core/lineSeparator/LineSeparator';
import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-remix-icon';
import {Theme} from 'styles/Theme';

type ButtonSupportingTextProps = {
  iconName?: string;
  iconSize?: string;
  iconColor?: string;
  iconLabel?: string;
  supportingText?: string;
  linkTo?: string;
  event?: () => void;
};

function ButtonSupportingText(props: ButtonSupportingTextProps) {
  return (
    <>
      <View style={[styles.container]}>
        <TouchableOpacity style={[styles.appButton]} onPress={() => props.event()} activeOpacity={1}>
          <View style={[styles.containerList]}>
            <Text style={[styles.h5]}>{props.iconLabel}</Text>
            <Text style={[styles.p]}>{props.supportingText}</Text>
          </View>
          <Icon style={[styles.icon]} name={props.iconName} size={props.iconSize} color={props.iconColor} />
        </TouchableOpacity>
        <LineSeparator />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.SupportingText.backgroundColor,
  },
  appButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 24,
  },
  containerList: {
    flex: 2,
    flexDirection: 'column',
    padding: 20,
    justifyContent: 'space-between',
  },
  h5: {
    flex: 1,
    color: Theme.SupportingText.h5FontColor,
    fontFamily: Theme.SupportingText.h5FontFamily,
    fontWeight: Theme.SupportingText.h5FontWeight,
    fontSize: 16,
    flexDirection: 'column',
    marginBottom: 4,
  },
  p: {
    flex: 1,
    color: Theme.SupportingText.pFontColor,
    fontFamily: Theme.SupportingText.pFontFamily,
    fontWeight: Theme.SupportingText.pFontWeight,
    fontSize: 16,
    flexDirection: 'column',
    marginTop: 4,
  },
  icon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default ButtonSupportingText;
