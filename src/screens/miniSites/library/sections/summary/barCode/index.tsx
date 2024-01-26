import { StyleSheet, Text, View } from 'react-native';
import { LibraryData } from '~/types/library';
import BarcodeCreatorViewManager, { BarcodeFormat } from 'react-native-barcode-creator';
import { useState } from 'react';

interface LibraryBarCodeProps {
  data: LibraryData
}

export function LibraryBarCode(props: LibraryBarCodeProps) {
  const [widthComponent, setWidthComponent] = useState<number>(0);
  return (
    <>
      <View style={styles(widthComponent).container} onLayout={(event) => {
        const {width} = event.nativeEvent.layout;
        setWidthComponent(width);
      }}>
        <Text style={styles(widthComponent).textDescription}>
          Código para uso solo en biblioteca
        </Text>
        <BarcodeCreatorViewManager
          value={props.data.biblioteca.codigo_barra}
          background={'#fff'}
          foregroundColor={'#283341'}
          format={BarcodeFormat.CODE128}
          style={styles(widthComponent).barCode} />
        <Text style={styles(widthComponent).textBarcode}>
          {props.data.biblioteca.codigo_barra}
        </Text>
      </View>
    </>
  );
}

const styles = (barCodeWidth: number) =>
StyleSheet.create({
  container: {
    paddingVertical: 12,
    backgroundColor: '#fff',    
    flexDirection:'column', 
    gap: 4,
    overflow: 'hidden'
  },
  textDescription: {
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
    textAlign: 'center',
    color: '#283341'
  },
  barCode: {
    width: barCodeWidth, 
    height: 69
  },
  textBarcode: {
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 32,
    textAlign: 'center',
    color: '#283341'
  }
});
