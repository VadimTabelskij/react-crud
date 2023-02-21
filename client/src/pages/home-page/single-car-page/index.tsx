import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ApiService from 'services/api-service';
import routes from 'navigation/routes';
import { Box } from '@mui/material';

const SingleCarPage = () => {
  const { id } = useParams();
  const [car, setCar] = React.useState<undefined | CarsModel[]>(undefined);

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchCar = await ApiService.fetchCar(id);
        setCar(fetchCar);
      })();
    }
  }, []);

  if (id === undefined) return <Navigate to={routes.HomePage} />;

  return (
    <Box component="pre">
      {JSON.stringify(car, null, 3)}
    </Box>
  );
};

export default SingleCarPage;
