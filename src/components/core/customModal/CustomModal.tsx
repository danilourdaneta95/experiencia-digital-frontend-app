import * as React from 'react';
import {useContext} from 'react';
import {View, StyleSheet, TouchableOpacity, Modal, Alert} from 'react-native';
import ModalContext from '~/context/Modal/ModalContext';
import {Theme} from '~/styles/Theme';

export interface CustomModalProps {
  children?: React.ReactNode;
  /**
   * contentVerticalPosition Default Value = flex-end
   */
  contentVerticalPosition: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  /**
   * contentHorizontalPosition Default Value = center
   */
  contentHorizontalPosition: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
}

interface StylesProps extends CustomModalProps {
  colorModal?: string;
}

export default function CustomModal(props: CustomModalProps) {
  const {StateModal, toggleStateModal} = useContext(ModalContext);

  if (StateModal === true) {
    return (
      <View style={styles(props).centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={StateModal}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}
        >
          <View style={styles(props).centeredView}>
            <TouchableOpacity style={styles(props).modalTouch} onPress={toggleStateModal} activeOpacity={1}>
              {props.children}
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  } else return null;
}

export const styles = (props: StylesProps) =>
  StyleSheet.create({
    centeredView: {
      flex: 1,
      backgroundColor: `${props.colorModal || `${Theme.ModalProps.colorModal}`}`,
    },
    modalTouch: {
      justifyContent: `${props.contentVerticalPosition || 'flex-end'}`,
      alignItems: `${props.contentHorizontalPosition || 'center'}`,
      width: '100%',
      height: '100%',
    },
  });
