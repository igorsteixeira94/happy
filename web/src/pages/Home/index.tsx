import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Container, HomeWrapper, LogoImage, Footer, AcessApp } from './styles';

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

          <AcessApp to="/app">
            <FiArrowRight size={26} />
          </AcessApp>
        </Footer>
      </HomeWrapper>
    </Container>
  );
};

export default Home;
