import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-remix-icon';
import globalStyles from '~/styles/GlobalStyles';

interface PenaltyMessageProps {
  multa: number
}

export function PenaltyMessage(props: PenaltyMessageProps) {
  return (
    <View style={styles.container}>
      {props.multa > 0 ?
        <View style={styles.penaltyContainer}>
          <Text style={styles.penaltyText}>
            Pagar multa
          </Text>
          <Icon
            name='arrow-right-line'
            color='#001894'
            size={16}
          />
        </View>
      :
        <View style={[globalStyles.row, styles.noPenaltyContainer]}>
          <Text style={styles.noPenaltyText}>
            ¡Muy bien! No tienes multas pendientes
          </Text>
          <Icon
            name='emotion-happy-line'
            color='#C5CDF9'
            size={16}
          />
        </View>
      } 
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    marginTop: 16, 
    width: '100%'
  },
  penaltyContainer: {
    width: '100%', 
    alignItems: 'center', 
    gap: 12, 
    flexDirection: 'row', 
    justifyContent: 'flex-end'
  },
  penaltyText: {
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 28,
    color: '#001894'
  },
  noPenaltyContainer: {
    alignItems: 'center', 
    gap: 10
  },
  noPenaltyText: { 
    fontFamily: 'Karla',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
    color: '#475467'
  }
});
