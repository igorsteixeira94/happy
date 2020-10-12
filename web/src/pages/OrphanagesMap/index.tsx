import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import { Container, Aside, MapMark, AddOrphanage } from './styles';

const OrphanagesMap: React.FC = () => {
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
      </Map>
      <AddOrphanage to="/">
        <FiPlus size={26} />
      </AddOrphanage>
    </Container>
  );
};

export default OrphanagesMap;
