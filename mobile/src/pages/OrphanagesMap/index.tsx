/* eslint-disable import/no-extraneous-dependencies */
import React, { useCallback, useEffect, useState } from 'react';
import { Marker, PROVIDER_GOOGLE, Callout } from 'react-native-maps';

import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';
import api from '../../../services/api';
import mapMarker from '../../images/map-marker.png';

import {
  Container,
  Map,
  CalloutContainer,
  CalloutText,
  Footer,
  FooterText,
  CreateOrphanageButton,
} from './styles';

interface OrphanageItem {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<OrphanageItem[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    });
  }, []);

  // Funcoes
  const handleGoToOrphanateDetails = useCallback((id: string) => {
    navigation.navigate('OrphanageDetails', { id });
  }, []);
  const handleGoToCreateOrphanage = useCallback(() => {
    navigation.navigate('CreateOrphanageSelectMap');
  }, []);

  // Component JSX
  if (!orphanages) {
    return <Text>Carregando</Text>;
  }
  return (
    <Container>
      <Map
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -12.1619962,
          longitude: -44.9906644,
          latitudeDelta: 0.028,
          longitudeDelta: 0.028,
        }}
      >
        {orphanages.map(orphanage => {
          return (
            <Marker
              key={orphanage.id}
              icon={mapMarker}
              coordinate={{
                latitude: Number(orphanage.latitude),
                longitude: Number(orphanage.longitude),
              }}
              calloutAnchor={{
                x: 2.9,
                y: 0.8,
              }}
            >
              <Callout
                tooltip
                onPress={() => {
                  handleGoToOrphanateDetails(orphanage.id);
                }}
              >
                <CalloutContainer>
                  <CalloutText>{orphanage.name}</CalloutText>
                </CalloutContainer>
              </Callout>
            </Marker>
          );
        })}
      </Map>
      <Footer>
        <FooterText>2 orfanatos encontrados</FooterText>
        <CreateOrphanageButton onPress={handleGoToCreateOrphanage}>
          <Feather name="plus" size={20} color="#fff" />
        </CreateOrphanageButton>
      </Footer>
    </Container>
  );
};

export default OrphanagesMap;
