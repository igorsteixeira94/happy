import React, { useCallback, useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { Marker, MapEvent } from 'react-native-maps';

import mapMarkerImg from '../../../images/map-marker.png';
import { Container, Map, NextButton, NextButtonText } from './styles';

const SelectMapPosition: React.FC = () => {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const navigation = useNavigation();

  return (
    <Container>
      <Map
        initialRegion={{
          latitude: -12.1619962,
          longitude: -44.9906644,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        onPress={event => {
          setPosition(event.nativeEvent.coordinate);
        }}
      >
        {position.latitude !== 0 && (
          <Marker
            icon={mapMarkerImg}
            coordinate={{
              latitude: position.latitude,
              longitude: position.longitude,
            }}
          />
        )}
      </Map>

      {position.latitude !== 0 && (
        <NextButton
          onPress={() => {
            navigation.navigate('CreateOrphanageData', { position });
          }}
        >
          <NextButtonText>Próximo</NextButtonText>
        </NextButton>
      )}
    </Container>
  );
};

export default SelectMapPosition;
