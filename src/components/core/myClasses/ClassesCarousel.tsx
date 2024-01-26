import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Clase} from '~/types/horario-dia';
import ClassCard from './ClassCard';
import globalStyles from '~/styles/GlobalStyles';

interface ClassesCarouselProps {
  data: Clase[];
}

export default function ClassesCarousel(props: ClassesCarouselProps) {
  return (
    <>
      <ScrollView horizontal>
        {props.data?.map((clase: Clase, index: number) => (
          <ClassCard data={clase} key={index} />
        ))}
      </ScrollView>

      <View style={globalStyles.width_100pc}>
        <Text
          style={[
            globalStyles.body_sm,
            globalStyles.text_normal,
            globalStyles.__text_info_strong,
            globalStyles.align_center,
            globalStyles.text_center,
          ]}
        >
          Hoy tienes {props.data?.length} clases
        </Text>
      </View>
    </>
  );
}
