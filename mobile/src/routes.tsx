import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';
import Header from './components/Header';
import OrphanageData from './pages/CreateOrphanage/OrphanageData';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="OrphanagesMap"
          component={OrphanagesMap}
          options={{ headerShown: false }}
        />
        <Screen
          name="OrphanageDetails"
          component={OrphanageDetails}
          options={{
            headerShown: true,
            header: () => <Header title="Orfanato" showCancel={false} />,
          }}
        />
        <Screen
          name="CreateOrphanageSelectMap"
          component={SelectMapPosition}
          options={{
            headerShown: true,
            header: () => (
              <Header title="Selecione no mapa." showCancel={false} />
            ),
          }}
        />
        <Screen
          name="CreateOrphanageData"
          component={OrphanageData}
          options={{
            headerShown: true,
            header: () => <Header title="Informe os dados." />,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
