import * as React from 'react';
import {useContext} from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import CustomModal from '../customModal/CustomModal';
import ModalContext from '~/context/Modal/ModalContext';
import Icon from 'react-native-remix-icon';

interface PopUpProps {
  isOpenPopUp: boolean;
  children?: React.ReactNode;
  /**
   * cardVerticalPosition Default Value = flex-end
   */
  cardVerticalPosition?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  /**
   * cardHorizontalPosition Default Value = center
   */
  cardHorizontalPosition?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  cardWidth?: number | string;
  cardPadding?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
}

interface StylesProps extends PopUpProps {
  colorModal?: string;
}

export default function PopUp(props: PopUpProps) {
  const {setStateModal} = useContext(ModalContext);
  const openPopUp = props.isOpenPopUp;

  if (openPopUp == true) {
    return (
      <>
        <CustomModal
          contentVerticalPosition={props.cardVerticalPosition}
          contentHorizontalPosition={props.cardHorizontalPosition}
        >
          <View style={styles(props).modalView}>
            <Pressable style={[styles(props).buttonClose]} onPress={() => setStateModal(false)}>
              <Icon name="close-fill" size="20" color="#475467" />
            </Pressable>
            {props.children}
          </View>
        </CustomModal>
      </>
    );
  } else return null;
}

export const styles = (props: StylesProps) =>
  StyleSheet.create({
    modalView: {
      margin: 0,
      width: `${props.cardWidth || '100%'}`,
      alignSelf: 'center',
      backgroundColor: 'white',
      borderTopLeftRadius: props.borderTopLeftRadius || 0,
      borderTopRightRadius: props.borderTopRightRadius || 0,
      padding: props.cardPadding || 0,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },

    buttonClose: {
      width: 32,
      height: 32,
      marginTop: 12,
      marginRight: 8,
      marginBottom: 12,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-end',
    },
  });
