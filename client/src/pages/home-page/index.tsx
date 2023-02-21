import React from 'react';
import ApiService from 'services/api-service';
import { Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import routes from 'navigation/routes';
import CarsCard from './cars-card';
import * as Styled from './styled';

const HomePage = () => {
  const [cars, setCars] = React.useState<CarsModel[]>([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    (async () => {
      const fetchedCars = await ApiService.fetchCars();
      setCars(fetchedCars);
    })();
  }, []);

  return (
    <Container sx={{ mt: 2 }}>
      <Button variant="contained" onClick={() => navigate(routes.CarFormPage)}>
        Created New
      </Button>
      <Styled.CarsGrid>
        {cars.map((carsProps) => (<CarsCard key={carsProps.id} {...carsProps} />))}
      </Styled.CarsGrid>
    </Container>
  );
};

export default HomePage;
