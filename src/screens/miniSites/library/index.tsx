import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Tabs from '~/components/customs/tabs';
import TabContent from '~/components/customs/tabs/section';
import { Theme } from '~/styles/Theme';
import { LibraryData } from '~/types/library';
import { Lendings } from './sections/lendings';
import { LibrarySummary } from './sections/summary';
import { LibraryTopIcon } from './sections/icon';
import { CONSTANTS } from '~/settings/Constants';
import { SummaryInfoCard } from './sections/summary/infoCard';
import { LibraryBarCode } from './sections/summary/barCode';

const data: LibraryData = {
  biblioteca: {
    estado: 'Suspendida',
    numero_prestamos: 2,
    multas: 0,
    codigo_barra: '198986985',
    rut: '19.898.698-5',
    prestamos: [
      {
        nombre_corto: 'Principios de química...',
        nombre_largo: 'Principios de química: los caminos del descubrimiento...',
        inicio: '2023-03-08 a las 10:49:15',
        vencimiento: '2023-03-08 a las 13:49:15'
      },
      {
        nombre_corto: 'Enfermería en practica',
        nombre_largo: 'Enfermería en practica',
        inicio: '2023-03-08 a las 10:49:15',
        vencimiento: '2023-03-08 a las 13:49:15'
      }
    ]
  }
};

export function Library() {
  // const { loading, error, networkStatus, data, refetch } = useQuery<LibraryData>(gqlLibrary.queries.GET_LIBRARY_DATA, {
  //   fetchPolicy: 'network-only', // Used for first execution
  //   nextFetchPolicy: 'cache-first', // Used for subsequent executions
  //   notifyOnNetworkStatusChange: true
  // });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LibraryTopIcon />
      <Tabs>
        <TabContent title="RESUMEN" name={CONSTANTS.LibraryScreens.SUMMARY}>
          <LibrarySummary data={data} />
        </TabContent>
        <TabContent title="PRÉSTAMOS" name={CONSTANTS.LibraryScreens.LENDINGS}>
          <Lendings data={data} />
        </TabContent>
      </Tabs>
      <SummaryInfoCard />
      <LibraryBarCode data={data} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${Theme.sections.bgSections}`,
    paddingVertical: 15,
    paddingHorizontal: 18,
    flexDirection:'column', 
    gap: 16
  },
  icon: { 
    right: 0, 
    position: 'absolute', 
    marginVertical: 15,
    marginHorizontal: 18,

    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.0,
    elevation: 2
  }
});
