import { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import CustomAccordion from '~/components/customs/accordion';
import { Table } from '~/components/customs/table';
import { ColumnTable } from '~/components/customs/table/column';
import { RowTable } from '~/components/customs/table/row';
import { LibraryData, Prestamo } from '~/types/library';

interface LendingsProps {
  data: LibraryData
}

export function Lendings(props: LendingsProps) {
  const [option, setOption] = useState<number>();
  return (
    <>
      {props.data.biblioteca.prestamos.map((data: Prestamo, index: number) => (
        <CustomAccordion 
          key={index} 
          title={data.nombre_corto}
          active={option == index}
          event={() => { setOption(index); }}>
          <Table>
            <RowTable>
              <ColumnTable widthPercentage={30}>
                <Text style={styles.text}>Libro</Text>
              </ColumnTable>
              <ColumnTable widthPercentage={70}>
                <Text style={styles.text}>{data.nombre_largo}</Text>
              </ColumnTable>
            </RowTable>
            <RowTable>
              <ColumnTable widthPercentage={30}>
                <Text style={styles.text}>Inicio</Text>
              </ColumnTable>
              <ColumnTable widthPercentage={70}>
                <Text style={styles.text}>{data.inicio}</Text>
              </ColumnTable>
            </RowTable>
            <RowTable>
              <ColumnTable widthPercentage={30}>
                <Text style={styles.text}>Vencimiento</Text>
              </ColumnTable>
              <ColumnTable widthPercentage={70}>
                <Text style={styles.text}>{data.vencimiento}</Text>
              </ColumnTable>
            </RowTable>
          </Table>
        </CustomAccordion>
        ))}
    </>
  );
}

export const styles = StyleSheet.create({
  text: {
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
    color: '#283341'
  }
});
