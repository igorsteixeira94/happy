import React from 'react';

import { Container, HomeWrapper, LogoImage, Footer } from './styles';
import Button from '../components/Button';

const Home: React.FC = () => {
  return (
    <Container>
      <HomeWrapper>
        <main>
          <LogoImage />
          <div>
            <h1>Leve felicidade para o mundo</h1>
            <p>Visite orfanatos e mude o dia de muitas crianças.</p>
          </div>
        </main>

        <Footer>
          <address>
            <strong>Rio do Sul</strong>
            <span>Santa Catarina</span>
          </address>

          <Button />
        </Footer>
      </HomeWrapper>
    </Container>
  );
};

export default Home;
