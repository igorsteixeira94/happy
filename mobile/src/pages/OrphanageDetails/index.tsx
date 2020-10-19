import React, { useEffect, useState } from 'react';
import { Linking, ScrollView, Text } from 'react-native';
import { Marker } from 'react-native-maps';
import { Feather, FontAwesome } from '@expo/vector-icons';

import { useRoute } from '@react-navigation/native';
import mapMarkerImg from '../../images/map-marker.png';

import {
  Container,
  ImageWrapper,
  ImageOrphanage,
  DetailsContainer,
  DetailsTitle,
  DetailsDescription,
  MapContainer,
  RoutesContainer,
  RoutesText,
  Line,
  ScheduleContainer,
  ScheduleItem,
  ScheduleText,
  ContactButton,
  ContactButtonText,
  Map,
} from './styles';
import api from '../../../services/api';

interface OrphanageDetailsRouterParams {
  id: string;
}

interface Orphanage {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: Array<{
    url: string;
  }>;
}

const OrphanageDetails: React.FC = () => {
  const route = useRoute();
  const [orphanage, setOrphanage] = useState<Orphanage>();

  const params = route.params as OrphanageDetailsRouterParams;

  function handleGoToGoogleMaps() {
    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&destination=${orphanage?.latitude},${orphanage?.longitude}`,
    );
  }

  useEffect(() => {
    api.get(`orphanages/${params.id}`).then(response => {
      setOrphanage(response.data);
    });
  }, [params.id]);

  if (!orphanage) {
    return <Text>Carregando...</Text>;
  }

  return (
    <Container>
      <ImageWrapper>
        <ScrollView horizontal pagingEnabled>
          {orphanage.images.map(image => {
            return (
              <ImageOrphanage
                key={Math.random()}
                source={{
                  uri: image.url,
                }}
              />
            );
          })}
        </ScrollView>
      </ImageWrapper>

      <DetailsContainer>
        <DetailsTitle>{orphanage.name}</DetailsTitle>
        <DetailsDescription>{orphanage.about}</DetailsDescription>

        <MapContainer>
          <Map
            initialRegion={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }}
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
          >
            <Marker
              icon={mapMarkerImg}
              coordinate={{
                latitude: orphanage.latitude,
                longitude: orphanage.longitude,
              }}
            />
          </Map>

          <RoutesContainer onPress={handleGoToGoogleMaps}>
            <RoutesText>Ver rotas no Google Maps</RoutesText>
          </RoutesContainer>
        </MapContainer>

        <Line />

        <DetailsTitle>Instruções para visita</DetailsTitle>
        <DetailsDescription>{orphanage.instructions}</DetailsDescription>

        <ScheduleContainer>
          <ScheduleItem background="#E6F7FB" borderColor="#B3DAE2">
            <Feather name="clock" size={40} color="#2AB5D1" />
            <ScheduleText color="#5C8599">
              {orphanage.opening_hours}
            </ScheduleText>
          </ScheduleItem>
          <ScheduleItem
            background={orphanage.open_on_weekends ? '#EDFFF6' : '#ffffff'}
            borderColor={orphanage.open_on_weekends ? '#37C77F' : '#FFBCD4'}
          >
            <Feather
              name="info"
              size={40}
              color={orphanage.open_on_weekends ? '#39CC83' : '#FF669D'}
            />
            {orphanage.open_on_weekends ? (
              <ScheduleText color="#39CC83">
                Atendemos fim de semana
              </ScheduleText>
            ) : (
              <ScheduleText color="#FF669D">
                Atendemos fim de semana
              </ScheduleText>
            )}
          </ScheduleItem>
        </ScheduleContainer>

        <ContactButton onPress={() => {}}>
          <FontAwesome name="whatsapp" size={24} color="#FFF" />
          <ContactButtonText>Entrar em contato</ContactButtonText>
        </ContactButton>
      </DetailsContainer>
    </Container>
  );
};

export default OrphanageDetails;
