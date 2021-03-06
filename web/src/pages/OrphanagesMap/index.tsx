import React, { useEffect, useState } from 'react';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';
import { Link } from 'react-router-dom';
import { Container, Aside, MapMark, AddOrphanage } from './styles';

import imgMark from '../../images/map-mark.svg';
import api from '../../services/api';

const mapIcon = Leaflet.icon({
  iconUrl: imgMark,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

interface Orphanage {
  id: string;
  latitude: number;
  longitude: number;
  name: string;
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
  useEffect(() => {
    api.get('/orphanages').then(response => {
      setOrphanages(response.data);
    });
  }, []);
  return (
    <Container>
      <Aside>
        <main>
          <MapMark />
          <h2>Escolha um orfanato no mapa.</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </main>

        <address>
          <strong>Barreiras</strong>
          <span>Bahia</span>
        </address>
      </Aside>

      <Map
        center={[-12.1615011, -44.9924582]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        {orphanages.map(orphanage => {
          return (
            <Marker
              key={orphanage.id}
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >
                {orphanage.name}
                <Link to={`/orphanage/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#FFF" />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>
      <AddOrphanage to="/orphanages/create">
        <FiPlus size={26} />
      </AddOrphanage>
    </Container>
  );
};

export default OrphanagesMap;
