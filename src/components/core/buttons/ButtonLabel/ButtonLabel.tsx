import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import ImgBgButton from 'assets/backgroundButton/bgButtonLabel.svg';
import data from 'data/dataComponents/buttonJobsSection.json';

interface ButtonLabelProps {
  labelText: string;
  event?: () => void;
  linkTo?: string;
}

function ButtonLabel(props: ButtonLabelProps) {
  return (
    <>
      <View style={[styles.container]}>
        {data.EgresadosOfertasLaborales.map(data => (
          <TouchableOpacity
            key={data.id}
            style={[styles.buttonContainer]}
            onPress={() => props.event()}
            activeOpacity={1}
          >
            <ImgBgButton style={[styles.imgContainer]} />
            <Text style={[styles.h5]}>
              {props.labelText}
              {data.labelText}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: Platform.OS === 'ios' ? 'center' : 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 11,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Platform.OS === 'ios' ? 0 : 14,
  },
  imgContainer: {
    height: 108,
    width: 156,
  },
  h5: {
    flex: 1,
    alignItems: 'center',
    color: '#001894',
    flexDirection: 'column',
    textAlign: 'center',
    fontFamily: 'Karla-Bold',
    fontSize: 16,
    position: 'absolute',
    paddingLeft: 12,
    paddingRight: 12,
  },
});

export default ButtonLabel;
