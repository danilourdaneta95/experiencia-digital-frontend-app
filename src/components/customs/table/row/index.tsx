import { Children } from 'react';
import { StyleSheet, View } from 'react-native';
import { ColumnTable } from '../column';

interface RowTableProps {
  children?: any
  padding?: number
  lastRow?: boolean
}

export function RowTable(props: RowTableProps) {  
  const columns: any[] = [];
  Children.forEach(props.children, (child, index) => {
    if (child.type === ColumnTable) {
      columns.push(
        <ColumnTable key={index} {...child.props} {...props}>
          {child.props.children}
        </ColumnTable>
      );
    }
  });

  return (
    <>
      <View style={styles.container}>
        {columns}
      </View>
      {!props.lastRow && <View style={styles.separator} /> }
    </>
  );
}

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  separator: {
    flex: 1,
    borderColor: '#EAECF0',
    borderBottomWidth: 1,
    borderStyle: 'solid'
  }
});
