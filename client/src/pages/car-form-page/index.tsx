/* eslint-disable no-alert */
import React from 'react';
import { Stack, Typography } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ApiService from 'services/api-service';
import { useNavigate, useParams } from 'react-router-dom';
import routes from 'navigation/routes';
import useCar from 'hooks/use-car';
import LocationField from './location-field';
import ImagesField from './images-field';
import * as Styled from './styled';
import { getCarFormValues } from './helpers';
import { getModeData } from './data';
import StyleField from './style-field';
import BrandField from './brand-field';
import ButtonField from './button-field';

const CarFormPage = () => {
  const { id } = useParams();
  const [car, loadingCarData] = useCar(id);

  const formRef = React.useRef<undefined | HTMLFormElement>(undefined);
  const navigate = useNavigate();

  const mode = id !== undefined ? 'edit' : 'create';
  const {
    title,
    btnText,
    color,
    colorMain,
  } = getModeData(mode);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const values = getCarFormValues(formRef.current);

      if (mode === 'create') {
        await ApiService.createCar(values);
        navigate(routes.HomePage);
      } else if (mode === 'edit' && id !== undefined) {
        await ApiService.updateCar(id, values);
        navigate(routes.SingleCarPage.createLink(id));
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('Error on formn submit. Contact system administrator.');
      }
    }
  };

  if (loadingCarData) return null;

  return (
    <Styled.PageLayout>
      <Styled.Paper elevation={6}>
        <Stack
          sx={{ gap: 2, alignItems: 'center' }}
          component="form"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <DirectionsCarIcon sx={{ fontSize: 60, color: colorMain }} />
          <Typography variant="h4" color={colorMain}>{title}</Typography>
          <BrandField color={color} defualtBrand={car?.brands} />
          <LocationField
            color={color}
            defaultCountry={car?.location.country}
            defaultCity={car?.location.city}
          />
          <StyleField color={color} defualtStyle={car?.style} />
          <ImagesField color={color} colorMain={colorMain} defaultImages={car?.images} />
          <ButtonField color={color} btnText={btnText} />
        </Stack>
      </Styled.Paper>
    </Styled.PageLayout>
  );
};
export default CarFormPage;
