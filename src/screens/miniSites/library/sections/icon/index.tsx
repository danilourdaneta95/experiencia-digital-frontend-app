import * as React from 'react';
import { StyleSheet } from 'react-native';
import LibraryIcon from 'assets/library/library-icon.svg';

export function LibraryTopIcon() {
  return (
    <LibraryIcon style={styles.icon} />
  );
}

const styles = StyleSheet.create({
  icon: { 
    right: 0, 
    position: 'absolute', 
    marginVertical: 15,
    marginHorizontal: 18,
  }
});
