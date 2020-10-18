/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, FormEvent, ChangeEvent } from 'react';

import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';

import { FiPlus } from 'react-icons/fi';

import { useHistory } from 'react-router-dom';
import mapIcon from '../../util/mapIcon';

import SideBar from '../../components/SideBar';

import {
  Container,
  FormOrphanage,
  FormItem,
  BtnImage,
  SelectWeekends,
  BtnConfirm,
} from './styles';
import api from '../../services/api';

const CreateOrphaneges: React.FC = () => {
  const history = useHistory();

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  const [opening_on_weekends, setOpeningWeekends] = useState(true);
  const [images, setImages] = useState<File[]>([]);
  const [imagesPreview, setImagesPreview] = useState<string[]>([]);

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;

    setPosition({
      latitude: lat,
      longitude: lng,
    });
  }
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { latitude, longitude } = position;

    const data = new FormData();

    data.append('name', name);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('about', about);
    data.append('instructions', instructions);
    data.append('opening_hours', opening_hours);
    data.append('opening_on_weekends', JSON.stringify(opening_on_weekends));
    images.forEach(image => {
      data.append('images', image);
    });

    try {
      const response = await api.post('orphanages', data);

      alert('Cadastro realizado com sucesso');

      history.push(`/orphanage/${response.data.id}`);
    } catch (error) {
      alert('Problemas ao cadastrar!');
    }
  }

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }

    const selectedImages = Array.from(event.target.files);

    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map(image => {
      return URL.createObjectURL(image);
    });

    setImagesPreview(selectedImagesPreview);
  }

  return (
    <Container>
      <SideBar />
      <main>
        <FormOrphanage onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[-27.2092052, -49.6401092]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onclick={handleMapClick}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />
              {position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[position.latitude, position.longitude]}
                />
              )}
            </Map>

            <FormItem>
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                value={name}
                onChange={event => {
                  setName(event.target.value);
                }}
              />
            </FormItem>

            <FormItem>
              <label htmlFor="about">
                Sobre
                <span>Máximo de 300 caracteres</span>
              </label>
              <textarea
                id="about"
                maxLength={300}
                value={about}
                onChange={event => {
                  setAbout(event.target.value);
                }}
              />
            </FormItem>

            <FormItem>
              <label htmlFor="images">Fotos</label>

              <div className="images-container">
                {imagesPreview.map(image => {
                  return <img key={image} src={image} alt="" />;
                })}
                <BtnImage htmlFor="image[]">
                  <FiPlus size={24} color="#15b6d6" />
                </BtnImage>
              </div>

              <input
                multiple
                onChange={handleSelectImages}
                type="file"
                id="image[]"
              />
            </FormItem>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <FormItem>
              <label htmlFor="instructions">Instruções</label>
              <textarea
                id="instructions"
                value={instructions}
                onChange={event => {
                  setInstructions(event.target.value);
                }}
              />
            </FormItem>

            <FormItem>
              <label htmlFor="opening_hours">Horário de funcionamento</label>
              <input
                id="opening_hours"
                value={opening_hours}
                onChange={event => {
                  setOpeningHours(event.target.value);
                }}
              />
            </FormItem>

            <FormItem>
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <SelectWeekends>
                <button
                  type="button"
                  className={opening_on_weekends ? 'active' : ''}
                  onClick={() => {
                    setOpeningWeekends(true);
                  }}
                >
                  Sim
                </button>
                <button
                  type="button"
                  className={opening_on_weekends ? '' : 'active'}
                  onClick={() => {
                    setOpeningWeekends(false);
                  }}
                >
                  Não
                </button>
              </SelectWeekends>
            </FormItem>
          </fieldset>
          <BtnConfirm type="submit">Confirmar</BtnConfirm>
        </FormOrphanage>
      </main>
    </Container>
  );
};

export default CreateOrphaneges;
