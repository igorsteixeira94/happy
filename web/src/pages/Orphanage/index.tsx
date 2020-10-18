import React, { useEffect, useState } from 'react';

import { Map, Marker, TileLayer } from 'react-leaflet';
import { FiClock, FiInfo } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

import { useParams } from 'react-router-dom';
import SideBar from '../../components/SideBar';
import {
  Container,
  OrphanageMain,
  OrphanageDetails,
  OrphanageImages,
  OrphanageImageItem,
  OrphanageContent,
  OrphanageContentMap,
  Line,
  OrphanageContentOpen,
  OrphanageContentOpenHour,
  OrphanageContentOpenWeekends,
  OrphanageContentContact,
} from './styles';
import mapIcon from '../../util/mapIcon';
import api from '../../services/api';

interface Orphanage {
  latitude: number;
  longitude: number;
  name: string;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: Array<{
    url: string;
  }>;
}

interface OrphanageParams {
  id: string;
}

interface OpenWeekendsProps {
  open: boolean;
}

const Orphanage: React.FC<OpenWeekendsProps> = () => {
  const params = useParams<OrphanageParams>();
  const [orphanage, setOrphanage] = useState<Orphanage>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    api.get(`orphanages/${params.id}`).then(response => {
      setOrphanage(response.data);
    });
  }, [params]);

  if (!orphanage) {
    return <p>Carregando...</p>;
  }
  return (
    <Container>
      <SideBar />
      <OrphanageMain>
        <OrphanageDetails>
          <img
            src={orphanage.images[activeImageIndex].url}
            alt="Lar das meninas"
          />
          <OrphanageImages>
            {orphanage.images.map((image, index) => {
              return (
                <OrphanageImageItem
                  type="button"
                  key={Math.random()}
                  className={activeImageIndex === index ? 'active' : ''}
                  onClick={() => {
                    setActiveImageIndex(index);
                  }}
                >
                  <img src={image.url} alt={orphanage.name} />
                </OrphanageImageItem>
              );
            })}
          </OrphanageImages>
          <OrphanageContent>
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>
            <OrphanageContentMap>
              <Map
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={16}
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[orphanage.latitude, orphanage.longitude]}
                />
              </Map>
              <footer>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}
                >
                  Ver rotas no Google Maps
                </a>
              </footer>
            </OrphanageContentMap>
            <Line />
            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>
            <OrphanageContentOpen>
              <OrphanageContentOpenHour>
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta
                <br />
                {orphanage.opening_hours}
              </OrphanageContentOpenHour>
              <OrphanageContentOpenWeekends open={orphanage.open_on_weekends}>
                <FiInfo
                  size={32}
                  color={orphanage.open_on_weekends ? '#39CC83' : '#FF669D'}
                />
                {orphanage.open_on_weekends ? 'Atendemos' : 'Não Atendemos'}
                <br />
                fim de semana
              </OrphanageContentOpenWeekends>
            </OrphanageContentOpen>
            <OrphanageContentContact>
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </OrphanageContentContact>
          </OrphanageContent>
        </OrphanageDetails>
      </OrphanageMain>
    </Container>
  );
};

export default Orphanage;
