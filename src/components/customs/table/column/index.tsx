import { StyleSheet, View } from 'react-native';

interface ColumnTableProps {
  children: any;
  widthPercentage?: number
}

export function ColumnTable(props: ColumnTableProps) {
  return (
    <View style={styles(props).container}>
      {props.children}
    </View>
  );
}

export const styles = (props: ColumnTableProps) =>
  StyleSheet.create({
    container: {
      margin: 8,
      width: `${props.widthPercentage.toString()}%`
    }
  });
