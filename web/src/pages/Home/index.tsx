import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

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
            <strong>Barreiras</strong>
            <span>Bahia</span>
          </address>

          <Button>
            <FiArrowRight size={26} />
          </Button>
        </Footer>
      </HomeWrapper>
    </Container>
  );
};

export default Home;
