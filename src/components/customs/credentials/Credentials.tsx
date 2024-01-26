/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {useContext, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import PopUp from '~/components/core/popUp/PopUp';
import Tag from '~/components/core/tag/Tag';
import ModalContext from '~/context/Modal/ModalContext';
import {Theme} from '~/styles/Theme';
import Icon from 'react-native-remix-icon';

interface CredentialProps {
  some?: number;
  modalOpen?: boolean;
  nameStudent: string;
  rutStudent: string;
  QRurl: string;
  sede: string;
  jornada: string;
  carrera: string;
}

interface StylesProps extends CredentialProps {
  color?: string;
}

export default function Credential(props: CredentialProps) {
  return (
    <>
      <PopUp isOpenPopUp={props.modalOpen}>
        <View style={styles(props).containerTag}>
          <Tag>
            <Text style={[styles(props).textFamily, styles(props).textColor1, styles(props).h6]}>Credencial USS</Text>
          </Tag>
        </View>
        <View>
          <Text style={styles(props).nameStyle}>{props.nameStudent}</Text>
          <Text style={styles(props).idStyle}>{props.rutStudent}</Text>
        </View>
        <View style={styles(props).qrCode}>
          <QRCode backgroundColor="#ffffff" size={245} value={props.QRurl} />
        </View>
        <View style={styles(props).containerTag}>
          <Tag tagColor="#F2F4F7">
            <View style={styles(props).row}>
              <Icon name="book-line" size="14" color="#667085" />
              <Text style={[styles(props).textFamily, styles(props).textColor2, styles(props).h6]}>
                {props.carrera}: {props.jornada}
              </Text>
            </View>
          </Tag>
          <Tag tagColor="#F2F4F7">
            <View style={styles(props).row}>
              <Icon name="map-pin-line" size="14" color="#667085" />
              <Text style={[styles(props).textFamily, styles(props).textColor2, styles(props).h6]}>
                Sede: {props.sede}
              </Text>
            </View>
          </Tag>
        </View>
      </PopUp>
    </>
  );
}

export const styles = (props: StylesProps) =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: 'auto',
    },
    containerTag: {
      alignItems: 'center',
      marginBottom: 24,
    },
    nameStyle: {
      fontSize: Theme.FontSize.h2,
      fontFamily: 'Montserrat-Bold',
      color: '#283341',
      textAlign: 'center',
      marginBottom: 8,
    },
    idStyle: {
      fontSize: Theme.FontSize.h3,
      fontFamily: 'Montserrat-Bold',
      color: '#283341',
      textAlign: 'center',
      marginBottom: 30,
    },
    qrCode: {
      alignItems: 'center',
      padding: 16,
      marginBottom: 30,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
    },
    textFamily: {
      fontFamily: 'Montserrat-Medium',
    },
    textColor1: {
      color: '#00628D',
    },
    textColor2: {
      color: '#344054',
    },
    h6: {
      fontSize: Theme.FontSize.h6,
    },
  });
