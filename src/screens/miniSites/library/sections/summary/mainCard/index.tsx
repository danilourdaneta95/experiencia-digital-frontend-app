import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Card from '~/components/core/cards/Card';
import Tag from '~/components/core/tag/Tag';
import { CONSTANTS } from '~/settings/Constants';
import globalStyles from '~/styles/GlobalStyles';
import { LibraryData } from '~/types/library';
import { PenaltyMessage } from './penaltyMessage';

interface SummaryMainCardProps {
  data: LibraryData
  navigation?: any
}

export function SummaryMainCard(props: SummaryMainCardProps) {
  return (
    <Card>
      <View style={[globalStyles.row, styles.rowContent]}>
        <Text style={styles.text}>Estado de Cuenta</Text>
        <Tag tagColor="#ECFDF3" paddingHorizontal={10} paddingVertical={4}>
          <Text style={styles.tagText1}>
            {props.data.biblioteca.estado}
          </Text>
        </Tag>
      </View>
      <View style={styles.separator} />
      <View style={[globalStyles.row, styles.rowContent]}>
        <Text style={styles.text}>Préstamos</Text>
        <TouchableOpacity activeOpacity={1} onPress={() => {
          props.navigation.jumpTo(CONSTANTS.LibraryScreens.LENDINGS);
        }}>
          <Tag tagColor="#F2F4F7" paddingHorizontal={10} paddingVertical={2}>
            <Text style={styles.tagText2}>
              {props.data.biblioteca.prestamos.length}
            </Text>
          </Tag>
        </TouchableOpacity>
      </View>
      <View style={styles.separator} />
      <View style={[globalStyles.row, styles.rowContent]}>
        <Text style={styles.text}>Multas</Text>
        <Tag tagColor="#F2F4F7" paddingHorizontal={10} paddingVertical={2}>
          <Text style={styles.tagText2}>
            $ {props.data.biblioteca.multas}
          </Text>
        </Tag>
      </View>
      <PenaltyMessage multa={props.data.biblioteca.multas} />
    </Card>
  );
}

export const styles = StyleSheet.create({
  text: {
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 32,
    color: '#283341'
  },
  tagText1: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 20,
    color: '#027A48'
  },
  tagText2: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 20,
    color: '#344054'
  },
  rowContent: { 
    paddingVertical: 10,
    justifyContent: 'space-between', 
    width: '100%'
  },
  separator: {
    width: '100%',
    borderColor: '#EAECF0',
    borderBottomWidth: 1,
    borderStyle: 'solid'
  }
});
