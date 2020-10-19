import React, { useCallback, useState } from 'react';
import { Switch } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import {
  Container,
  Title,
  Label,
  Input,
  InputArea,
  SwitchContainer,
  NextButton,
  NextButtonText,
  ImagesInput,
  UploadImages,
  ImageItem,
} from './styles';
import api from '../../../../services/api';

interface OrphanageRouteParams {
  position: {
    latitude: number;
    longitude: number;
  };
}

const OrphanageData: React.FC = () => {
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [opening_on_hour, setOpeningOnHour] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<string[]>([]);
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params as OrphanageRouteParams;

  const handleCreateOrphanage = useCallback(async () => {
    const { latitude, longitude } = params.position;

    const data = new FormData();

    data.append('name', name);
    data.append('about', about);
    data.append('instructions', instructions);
    data.append('opening_hours', opening_on_hour);
    data.append('open_on_weekends', String(open_on_weekends));
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));

    images.forEach((image, index) => {
      data.append('images', {
        name: `ìmage_${index}.jpg`,
        type: 'image/jpg',
        uri: image,
      } as any);
    });

    await api.post('orphanages', data);
    navigation.navigate('OrphanagesMap');
  }, [
    name,
    about,
    instructions,
    opening_on_hour,
    open_on_weekends,
    params.position,
    images,
    navigation,
  ]);

  const handleSelectImages = useCallback(async () => {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

    if (status !== 'granted') {
      alert('Eita, precisamos de acesso as suas fotos...');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (result.cancelled) {
      return;
    }

    const { uri: image } = result;
    setImages([...images, image]);
  }, [images]);

  return (
    <Container contentContainerStyle={{ padding: 24 }}>
      <Title>Dados</Title>

      <Label>Nome</Label>
      <Input value={name} onChangeText={setName} />

      <Label>Sobre</Label>
      <InputArea value={about} onChangeText={setAbout} />

      <Label>Whatsapp</Label>
      <Input />

      <Label>Fotos</Label>

      <UploadImages>
        {images.map(image => {
          return <ImageItem key={image} source={{ uri: image }} />;
        })}
      </UploadImages>
      <ImagesInput onPress={handleSelectImages}>
        <Feather name="plus" size={24} color="#15B6D6" />
      </ImagesInput>

      <Title>Visitação</Title>
      <Label>Instruções</Label>
      <InputArea value={instructions} onChangeText={setInstructions} />

      <Label>Horario de visitas</Label>
      <Input value={opening_on_hour} onChangeText={setOpeningOnHour} />

      <SwitchContainer>
        <Label>Atende final de semana?</Label>
        <Switch
          thumbColor="#fff"
          trackColor={{ false: '#ccc', true: '#39CC83' }}
          value={open_on_weekends}
          onValueChange={setOpenOnWeekends}
        />
      </SwitchContainer>

      <NextButton onPress={handleCreateOrphanage}>
        <NextButtonText>Cadastrar</NextButtonText>
      </NextButton>
    </Container>
  );
};

export default OrphanageData;
