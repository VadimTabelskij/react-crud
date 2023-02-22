import React from 'react';
import {
  styled,
  Typography,
  Container,
  Box,
} from '@mui/material';
import routes from 'navigation/routes';
import { useParams, Navigate } from 'react-router-dom';
import ApiService from 'services/api-service';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';
import Img from 'components/ui/img';

import * as Styled from './styled';

const StyledSwiper = styled(Swiper)({
  width: '100%',
  height: '100%',
});

const SingleCarPage = () => {
  const { id } = useParams();
  const [car, setCar] = React.useState<CarsModel | undefined >(undefined);

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchCar = await ApiService.fetchCar(id);
        setCar(fetchCar);
      })();
    }
  }, []);

  if (id === undefined) return <Navigate to={routes.HomePage} />;
  if (car === undefined) return null;

  return (
    <Container sx={Styled.BreakpointSwiper}>
      <Box>
        <Typography variant="h4">
          Brand:
          {' '}
          {car.brands}
        </Typography>
        <Typography variant="h5">
          Location:
          {' '}
          {car.location.city}
          {' '}
          {car.location.country}
        </Typography>
        <Typography variant="h5">
          Style:
          {' '}
          {car.style}
        </Typography>
        <StyledSwiper
          effect="cube"
          grabCursor
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCube, Pagination]}
        >
          {car.images.map((img) => (
            <SwiperSlide key={img}>
              <Img src={img} sx={{ width: 1, height: 1 }} />
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </Box>
    </Container>
  );
};

export default SingleCarPage;
