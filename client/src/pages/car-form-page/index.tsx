/* eslint-disable no-console */
/* eslint-disable no-alert */
import React from 'react';
import {
  Stack,
  Typography,
  TextField,
  Button,
} from '@mui/material';
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
      } else {
        // TODO: Atlikti atnaujinimo darbus ir po sukurimo, nuvesti į
        // TODO: pagrindinį puslapį arba atnaujinto produkto puslapį
        console.log('Vykdomas atnaujinimas');
        console.log({ id, ...values });
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
          <TextField
            label="Brands"
            name="brands"
            fullWidth
            variant="filled"
            size="small"
            color={color}
            defaultValue={car?.brands}
          />
          <LocationField
            color={color}
            defaultCountry={car?.location.country}
            defaultCity={car?.location.city}
          />
          <TextField
            label="Style"
            name="style"
            fullWidth
            variant="filled"
            size="small"
            color={color}
            defaultValue={car?.style}
          />
          <ImagesField color={color} colorMain={colorMain} defaultImages={car?.images} />
          <Button
            variant="contained"
            color={color}
            size="large"
            fullWidth
            type="submit"
          >
            {btnText}
          </Button>
        </Stack>
      </Styled.Paper>
    </Styled.PageLayout>
  );
};
export default CarFormPage;
