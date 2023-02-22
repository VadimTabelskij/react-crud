import React from 'react';
import {
  Stack,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocationField from './location-field';
import ImagesField from './images-field';
import * as Styled from './styled';

const CarFormPage = () => (
  <Styled.PageLayout>
    <Styled.Paper elevation={6}>
      <Stack sx={{ gap: 2, alignItems: 'center', component: 'form' }}>
        <DirectionsCarIcon sx={{ fontSize: 60, color: 'primary.main' }} />
        <Typography variant="h4" color="primary">Create new brand</Typography>
        <TextField
          label="Brand"
          fullWidth
          variant="filled"
          size="small"
        />
        <LocationField />
        <TextField
          label="Style"
          fullWidth
          variant="filled"
          size="small"
        />
        <ImagesField />
        <Button variant="contained" color="primary" size="large" fullWidth>Create</Button>
      </Stack>
    </Styled.Paper>
  </Styled.PageLayout>
);

export default CarFormPage;
