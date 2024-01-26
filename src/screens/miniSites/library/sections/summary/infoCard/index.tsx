import { StyleSheet, Text, View } from 'react-native';
import Card from '~/components/core/cards/Card';
import LibrarySummaryInfo from 'assets/library/library-summary-info.svg';
import globalStyles from '~/styles/GlobalStyles';

export function SummaryInfoCard() {
  return (
      <Card style={styles.container}>
        <View style={[globalStyles.row, { }]}>
          <Text style={{
            flex: 1,
            fontFamily: 'Karla',
            fontStyle: 'normal',
            fontWeight: '500',
            fontSize: 14,
            lineHeight: 24
          }}>
            <Text style={{color: '#00628D'}}>¡Cuida tu cuenta! </Text>
            <Text style={{ color: '#475467'}}> Entrega tus libros y material de biblioteca a tiempo para evitar suspensión.</Text>
          </Text>
          <View style={{ marginLeft: 15}}>
            <LibrarySummaryInfo height={75} />
          </View>
        </View>
      </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  img: {
    height: 75,
  },
});
