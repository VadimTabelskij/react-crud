import React from 'react';
import ApiService from 'services/api-service';
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
    <Styled.CarsGrid>
      {cars.map((carsProps) => (<CarsCard key={carsProps.id} {...carsProps} />))}
    </Styled.CarsGrid>
  );
};

export default HomePage;
