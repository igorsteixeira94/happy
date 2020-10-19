import React from 'react';
import { ScrollView } from 'react-native';
import { Marker } from 'react-native-maps';
import { Feather, FontAwesome } from '@expo/vector-icons';

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

const OrphanageDetails: React.FC = () => {
  return (
    <Container>
      <ImageWrapper>
        <ScrollView horizontal pagingEnabled>
          <ImageOrphanage
            source={{
              uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg',
            }}
          />
          <ImageOrphanage
            source={{
              uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg',
            }}
          />
          <ImageOrphanage
            source={{
              uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg',
            }}
          />
        </ScrollView>
      </ImageWrapper>

      <DetailsContainer>
        <DetailsTitle>Orf. Esperança</DetailsTitle>
        <DetailsDescription>
          Presta assistência a crianças de 06 a 15 anos que se encontre em
          situação de risco e/ou vulnerabilidade social.
        </DetailsDescription>

        <MapContainer>
          <Map
            initialRegion={{
              latitude: -27.2092052,
              longitude: -49.6401092,
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
                latitude: -27.2092052,
                longitude: -49.6401092,
              }}
            />
          </Map>

          <RoutesContainer>
            <RoutesText>Ver rotas no Google Maps</RoutesText>
          </RoutesContainer>
        </MapContainer>

        <Line />

        <DetailsTitle>Instruções para visita</DetailsTitle>
        <DetailsDescription>
          Venha como se sentir a vontade e traga muito amor e paciência para
          dar.
        </DetailsDescription>

        <ScheduleContainer>
          <ScheduleItem background="#E6F7FB" borderColor="#5C8599">
            <Feather name="clock" size={40} color="#2AB5D1" />
            <ScheduleText color="#5C8599">
              Segunda à Sexta 8h às 18h
            </ScheduleText>
          </ScheduleItem>
          <ScheduleItem background="#EDFFF6" borderColor="#37C77F">
            <Feather name="info" size={40} color="#39CC83" />
            <ScheduleText color="#37C77F">Atendemos fim de semana</ScheduleText>
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
