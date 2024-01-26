import { Children } from 'react';
import { View } from 'react-native';
import { RowTable } from './row';

interface TableProps {
  headers?: string[]
  children: any
}

export function Table(props: TableProps) {
  const rows: any[] = [];
  Children.forEach(props.children, (child, index) => {
    if (child.type === RowTable) {
      rows.push(<RowTable key={index} lastRow={index == (Children.count(props.children) - 1)} {...child.props} />);
    }
  });

  return (
    <View>
      {rows}
    </View>
  );
};
