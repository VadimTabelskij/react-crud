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
import { useNavigate } from 'react-router-dom';
import routes from 'navigation/routes';
import LocationField from './location-field';
import ImagesField from './images-field';
import * as Styled from './styled';
import { getCarFormValues } from './helpers';

const CarFormPage = () => {
  const formRef = React.useRef<undefined | HTMLFormElement>(undefined);

  const carDataCreate = async (carsData: Omit<CarsModel, 'id'>) => {
    await ApiService.createCar(carsData);
  };

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate(routes.HomePage);
    try {
      const values = getCarFormValues(formRef.current);
      carDataCreate(values);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('Error on formn submit. Contact system administrator.');
      }
    }
  };

  return (
    <Styled.PageLayout>
      <Styled.Paper elevation={6}>
        <Stack
          sx={{ gap: 2, alignItems: 'center' }}
          component="form"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <DirectionsCarIcon sx={{ fontSize: 60, color: 'primary.main' }} />
          <Typography variant="h4" color="primary">Create new brand</Typography>
          <TextField
            label="Brands"
            name="brands"
            fullWidth
            variant="filled"
            size="small"
          />
          <LocationField />
          <TextField
            label="Style"
            name="style"
            fullWidth
            variant="filled"
            size="small"
          />
          <ImagesField />
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            type="submit"
          >
            Create

          </Button>
        </Stack>
      </Styled.Paper>
    </Styled.PageLayout>
  );
};
export default CarFormPage;
