import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';
import SelectMap from './pages/CreateOrphanage/SelectMap';
import Header from './components/Header';

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
          component={SelectMap}
          options={{
            headerShown: true,
            header: () => (
              <Header title="Selecione no mapa." showCancel={false} />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
