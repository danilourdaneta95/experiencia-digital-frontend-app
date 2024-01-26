import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Card from '~/components/core/cards/Card';
import {Clase} from '../../../types/horario-dia';
import globalStyles from '~/styles/GlobalStyles';
import Tag from '../tag/Tag';
import Icon from 'react-native-remix-icon';

interface ClassCardProps {
  data: Clase;
}

const ClassCard = (props: ClassCardProps) => {
  return (
    <Card style={[styles.container]}>
      <View style={[styles.header, globalStyles.align_center]}>
        <View style={[globalStyles.row, globalStyles.align_center, globalStyles.gap6]}>
          <Icon name="time-line" size="14" color="#667085" />
          <Text style={[globalStyles.title_6, globalStyles.text_normal, {color: '#667085'}]}>
            {`${props.data.horario_inicio} - ${props.data.horario_fin}`}
          </Text>
        </View>
      </View>
      <View style={globalStyles.mb_10}>
        <Text style={[globalStyles.title_4, globalStyles.text_strong]}>{props.data.materia_nombre}</Text>
        <Text style={[globalStyles.title_6, globalStyles.text_normal]}>Materia {props.data.materia_codigo}</Text>
      </View>
      <View style={[globalStyles.line, globalStyles.mb_10]} />
      <View style={globalStyles.column}>
        <Tag tagColor="#E1EEF8">
          <View style={[globalStyles.row, globalStyles.align_center, globalStyles.gap6]}>
            <Icon name="time-line" size="14" color="#00628D" />
            <Text style={[globalStyles.title_6, globalStyles.text_strong, styles.textTag]}>Sala:</Text>
            <Text style={[globalStyles.title_6, globalStyles.text_normal, styles.textTag]}>{props.data.sala}</Text>
          </View>
        </Tag>
        <Tag tagColor="#E1EEF8">
          <View style={[globalStyles.row, globalStyles.align_center, globalStyles.gap6]}>
            <Icon name="time-line" size="14" color="#00628D" />
            <Text style={[globalStyles.title_6, globalStyles.text_strong, styles.textTag]}>Profesor:</Text>
            <Text style={[globalStyles.title_6, globalStyles.text_normal, styles.textTag]}>{props.data.profesor}</Text>
          </View>
        </Tag>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 286,
    marginLeft: 2,
    marginBottom: 10,
    marginRight: 15,
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.0,
    elevation: 2
  },
  header: {
    flexDirection: 'row',
    marginBottom: 10,
    color: '#667085',
  },
  textTag: {
    color: '#00628D',
  },
});

export default ClassCard;
