import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5024',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const dataIpLink = '/cars';

const fetchCars = async () => {
  const response = await api.get<CarsModel[]>(dataIpLink);

  return response.data;
};

const fetchCar = async (id: string | number) => {
  const response = await api.get<CarsModel>(`${dataIpLink}/${id}`);

  return response.data;
};

const createCar = async (carsData: Omit<CarsModel, 'id'>) => {
  const response = await api.post<CarsModel>(dataIpLink, carsData);

  return response.data;
};

const deleteCar = async (id: string | number) => {
  await api.delete(`${dataIpLink}/${id}`);
};

const updateCar = async (id: string | number, carsData: Omit<CarsModel, 'id'>) => {
  const response = await api.patch<CarsModel>(`${dataIpLink}/${id}`, carsData);
  return response.data;
};

const ApiService = {
  fetchCars,
  fetchCar,
  createCar,
  deleteCar,
  updateCar,
};

export default ApiService;
