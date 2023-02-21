import React from 'react';
import ApiService from 'services/api-service';
import { Box, Button, Container } from '@mui/material';
import CarsCard from './cars-card';

import * as Styled from './styled';

const HomePage = () => {
  const [cars, setCars] = React.useState<CarsModel[]>([]);

  React.useEffect(() => {
    (async () => {
      const fetchedCars = await ApiService.fetchCars();
      setCars(fetchedCars);
    })();
  }, []);

  return (
    <Container>
      <Box sx={{ mt: 2 }}>
        <Button variant="contained" size="large">Create Brand</Button>
      </Box>
      <Styled.CarsGrid>
        {cars.map((carsProps) => (<CarsCard key={carsProps.id} {...carsProps} />))}
      </Styled.CarsGrid>
    </Container>
  );
};

export default HomePage;
