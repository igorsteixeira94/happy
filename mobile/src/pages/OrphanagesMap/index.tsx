/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Marker, PROVIDER_GOOGLE, Callout } from 'react-native-maps';

import { Feather } from '@expo/vector-icons';

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

const OrphanagesMap: React.FC = () => {
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
        <Marker
          icon={mapMarker}
          coordinate={{ latitude: -12.1619962, longitude: -44.9906644 }}
        >
          <Callout tooltip>
            <CalloutContainer>
              <CalloutText>Lar das meninas</CalloutText>
            </CalloutContainer>
          </Callout>
        </Marker>
      </Map>
      <Footer>
        <FooterText>2 orfanatos encontrados</FooterText>
        <CreateOrphanageButton
          onPress={() => {
            alert('sd');
          }}
        >
          <Feather name="plus" size={20} color="#fff" />
        </CreateOrphanageButton>
      </Footer>
    </Container>
  );
};

export default OrphanagesMap;
