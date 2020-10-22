import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import MapView from 'react-native-maps';

interface ScheduleTextProps {
  color: string;
}

interface ScheduleItemProps {
  background: string;
  borderColor: string;
}

export const Container = styled.ScrollView`
  flex: 1;
`;

export const ImageWrapper = styled.View`
  height: 240px;
`;

export const ImageOrphanage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: ${`${Dimensions.get('window').width}px`};
  height: 240px;
`;

export const DetailsContainer = styled.View`
  padding: 24px;
`;
export const DetailsTitle = styled.Text`
  color: #4d6f80;
  font-size: 30px;
  font-family: 'Nunito_700Bold';
`;
export const DetailsDescription = styled.Text`
  font-family: 'Nunito_600SemiBold';
  color: #5c8599;
  line-height: 24px;
  margin-top: 16px;
`;
export const MapContainer = styled.View`
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #b3dae2;
  margin-top: 40px;
  background: #e6f7fb;
`;

export const Map = styled(MapView)`
  width: 100%;
  height: 150px;
`;

export const RoutesContainer = styled(RectButton)`
  padding: 16px;
  align-items: center;
  justify-content: center;
`;
export const RoutesText = styled.Text`
  font-family: 'Nunito_700Bold';
  color: #0089a5;
`;

export const Line = styled.View`
  height: 0.8px;
  width: 100%;
  background: #d3e2e6;
  margin: 40px 0px;
`;

export const ScheduleContainer = styled.View`
  margin-top: 24px;
  flex-direction: row;
  justify-content: space-between;
`;
export const ScheduleItem = styled.View<ScheduleItemProps>`
  width: 48%;
  padding: 20px;

  background: ${props => props.background};

  border: 1px solid ${props => props.borderColor};
  border-radius: 20px;
`;
export const ScheduleText = styled.Text<ScheduleTextProps>`
  font-family: 'Nunito_600SemiBold';
  font-size: 16px;
  line-height: 24px;
  margin-top: 20px;

  color: ${props => props.color};
`;
export const ContactButton = styled(RectButton)`
  background: #3cdc8c;
  border-radius: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 56px;
  margin-top: 40px;
`;

export const ContactButtonText = styled.Text`
  font-family: 'Nunito_800ExtraBold';
  color: #fff;
  font-size: 16px;
  margin-left: 16px;
`;
