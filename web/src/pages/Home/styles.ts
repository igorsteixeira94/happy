import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { darken } from 'polished';

import landing from '../../images/landing.svg';
import logo from '../../images/logo.svg';

// Container pai da pagina
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);

  display: flex;
  align-items: center;
  justify-content: center;
`;

// Logo Happy
export const LogoImage = styled.img.attrs({
  src: logo,
  alt: 'Happy',
})``;

// Div com o conteudo da pagina
export const HomeWrapper = styled.div`
  padding: 10px;
  width: 100%;
  max-width: 1100px;

  height: 100%;
  max-height: 688px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;

  main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    justify-content: space-between;

    h1 {
      font-size: 7.6rem;
      font-weight: 900;
      line-height: 7.8rem;

      max-width: 394px;
    }
    p {
      font-weight: 600;
      font-size: 2.4rem;
      line-height: 3.4rem;

      max-width: 320px;
      margin-top: 4rem;
    }
  }

  //Mudar para mobile, com 1 columa
  @media (max-width: 530px) {
    background: none;
    grid-template-columns: 1fr;

    main {
      align-items: center;
    }

    h1,
    p {
      display: none;
    }
  }
  //Mostrar imagem de background
  @media (min-width: 985px) {
    background: url(${landing}) no-repeat 80% center;
  }
`;

// Footer com cidade e estado mais botão de avançar
export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  address {
    font-style: normal;
    font-size: 2.4rem;
    line-height: 3.4rem;

    strong {
      display: block;
      text-align: right;
    }
  }

  //BreakPoint
  @media (max-width: 530px) {
    align-items: center;
    text-align: center;

    address {
      strong {
        text-align: center;
      }
    }
  }
`;

export const AcessApp = styled(Link)`
  width: 8rem;
  height: 8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 3rem;

  transition: background 0.2s;

  background: var(--color-btn-home);

  svg {
    color: ${darken(0.3, '#FFD666')};
  }

  &:hover {
    background: var(--color-btn-home-hover);

    svg {
      color: ${darken(0.5, '#96FEFF')};
    }
  }

  //Breakpoints
  @media (max-width: 530px) {
    width: 80%;
  }
`;
