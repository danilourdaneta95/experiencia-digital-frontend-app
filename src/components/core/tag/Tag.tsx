import * as React from 'react';
import {View, StyleSheet} from 'react-native';

interface TagProps {
  tagColor?: string;
  paddingHorizontal?: number;
  paddingVertical?: number;
  borderRadius?: number;
  marginBottom?: number;
  children: React.ReactNode;
}

interface StylesProps extends TagProps {
  color?: string;
}

export default function Tag(props: TagProps) {
  return (
    <>
      <View style={styles(props).container}>{props.children}</View>
    </>
  );
}

export const styles = (props: StylesProps) =>
  StyleSheet.create({
    container: {
      backgroundColor: `${props.tagColor || '#E1EEF8'}`,
      paddingHorizontal: props.paddingHorizontal || 16,
      paddingVertical: props.paddingVertical || 8,
      borderRadius: props.borderRadius || 16,
      marginBottom: props.marginBottom || 10,
    },
  });
