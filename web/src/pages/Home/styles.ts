import styled from 'styled-components';
import landing from '../../images/landing.svg';
import logo from '../../images/logo.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoImage = styled.img.attrs({
  src: logo,
  alt: 'Happy',
})``;

export const HomeWrapper = styled.div`
  width: 100%;
  max-width: 1100px;

  height: 100%;
  max-height: 688px;

  background: url(${landing}) no-repeat 80% center;

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
`;

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
`;
