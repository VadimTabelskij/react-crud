import React from 'react';
import ApiService from 'services/api-service';

const useCar = (id: string | undefined) => {
  const [car, setCar] = React.useState<undefined | CarsModel>(undefined);
  const [loading, setLoading] = React.useState<boolean>(id !== undefined);

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchedCars = await ApiService.fetchCar(id);
        setCar(fetchedCars);
        setLoading(false);
      })();
    }
  }, []);

  return [car, loading] as const;
};

export default useCar;
