import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ProfileContext from 'context/Profile/ProfileContext';
import {Theme} from 'styles/Theme';
import renderComponents from 'data/controlRender/renderComponents.json';
import {HorarioDiaType} from '~/types/horario-dia';
import globalStyles from '~/styles/GlobalStyles';
import ClassesCarousel from '~/components/core/myClasses/ClassesCarousel';
import NoClasses from '~/components/core/myClasses/NoClasses';
import MyWeek from '~/components/core/myClasses/MyWeek';
import Tag from '~/components/core/tag/Tag';
import TitleIcon from '~/components/core/titleIcon/TitleIcon';
import apolloClient from '~/settings/Apollo';
import {gqlHorarioDia} from '~/gql';

export default function MyClasses() {
  /* Hooks of Context for read Profile of User  */
  const {userProfile} = useContext(ProfileContext);

  /* Create State of data.MyAccess of RenderComponents. */
  const [renderCard] = useState(renderComponents.MyClasses);
  const renderListProfiles = renderCard.map(data => data.id);
  const isRender = renderCard.map(data => data.render);
  const [data, setData] = useState<HorarioDiaType>();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    apolloClient
      .query<HorarioDiaType>({
        query: gqlHorarioDia.queries.GET_HORARIO_DIA,
        variables: {
          getHorarioDiaInput: {},
        },
      })
      .then(res => {
        setData(res.data);
      });
  };

  if (userProfile == renderListProfiles[userProfile] && isRender[userProfile]) {
    return (
      <View style={styles.container}>
        <TitleIcon iconName="book-2-line" text="Mis Clases" />
        <View style={[globalStyles.row, styles.tooltips]}>
          <Tag tagColor="#F8F9FC">
            <Text style={[globalStyles.title_6, globalStyles.text_normal, {color: '#363F72'}]}>
              {data?.horarioDia.dia}
            </Text>
          </Tag>
          <MyWeek />
        </View>
        {data?.horarioDia.clases?.length ? <ClassesCarousel data={data.horarioDia.clases} /> : <NoClasses />}
      </View>
    );
  } else {
    null;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: `${Theme.sections.bgSections}`,
    width: '100%',
    height: 'auto',
    paddingHorizontal: Theme.sections.paddingHorizontal,
    marginBottom: Theme.sections.marginBottom,
  },
  tooltips: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});
