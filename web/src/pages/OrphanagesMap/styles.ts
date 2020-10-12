import { lighten } from 'polished';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import imgMark from '../../images/map-mark.svg';

// Container pai
export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  position: relative;

  .leaflet-container {
    z-index: 5;
  }
  //Breakpoints
  @media (max-width: 910px) {
    flex-direction: column;
  }
`;

// Barra Lateral
export const Aside = styled.aside`
  width: 448px;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);

  padding: 8rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  h2 {
    font-weight: 800;
    font-size: 4rem;
    line-height: 4.2rem;

    margin-top: 80px;
  }
  p {
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 2.8rem;

    margin-top: 2.4rem;
  }

  address {
    strong {
      display: block;
    }
  }

  //Breakpoints
  @media (max-width: 910px) {
    flex-direction: row;
    align-items: center;
    padding: 4rem;

    width: 100%;
    height: 100px;

    h2,
    p {
      display: none;
    }
  }
`;

// Logo da Barra Lateral
export const MapMark = styled.img.attrs({
  src: imgMark,
  alt: 'MapMark',
})``;

// Botao para adicionar novos orfanatos
export const AddOrphanage = styled(Link)`
  width: 6.4rem;
  height: 6.4rem;

  position: absolute;
  bottom: 40px;
  right: 40px;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 2rem;

  transition: background 0.2s;

  background: var(--color-btn-plus);

  svg {
    color: #fff;
  }

  &:hover {
    background: ${lighten(0.3, '#15C3D6')};
    svg {
      color: #fff;
    }
  }
  //Breakpoints
  @media (max-width: 910px) {
    width: 5rem;
    height: 5rem;
  }
`;
