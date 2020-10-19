import styled from 'styled-components/native';
import MapView from 'react-native-maps';

// Container pai
export const Container = styled.View`
  flex: 1;
`;

// MapView
export const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

// Conteinar com nome do orfanato
export const CalloutContainer = styled.View`
  width: 168px;
  height: 46px;
  padding: 0px 16px;

  background: rgba(255, 255, 255, 0.8);
  border-radius: 16px;
  justify-content: center;
`;

// Nome do orfanato
export const CalloutText = styled.Text`
  font-family: 'Nunito_700Bold';
  color: #0089a5;
  font-size: 14px;
`;

// Rodape com numero de orfanatos encontrados e botão de adicionar
export const Footer = styled.View.attrs({
  elevation: 3,
})`
  position: absolute;
  left: 24px;
  right: 34px;
  bottom: 32px;

  background: #ffffff;
  border-radius: 20px;
  height: 56px;
  padding-left: 24px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

// Texto com quantidade de orfanatos
export const FooterText = styled.Text`
  font-family: 'Nunito_700Bold';
  color: #8fa7b3;
`;

// Botão para adicionar um novo orfanato
export const CreateOrphanageButton = styled.TouchableOpacity`
  width: 56px;
  height: 56px;

  background: #15c3d6;

  border-radius: 20px;

  justify-content: center;
  align-items: center;
`;
