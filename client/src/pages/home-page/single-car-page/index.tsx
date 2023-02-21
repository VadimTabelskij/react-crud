import React from 'react';
import {
  Box, Stack, styled,
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
    <Box>
      <Box component="pre">
        {JSON.stringify(car, null, 4)}
      </Box>
      <Box sx={{
        width: 600,
        height: 400,
        margin: 'auto',
        position: 'relative',
      }}
      >
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
        <Stack sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          zIndex: 3000,
          justifyContent: 'center',
        }}
        />
        <Stack sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          zIndex: 3000,
          justifyContent: 'center',
        }}
        />
      </Box>
    </Box>
  );
};

export default SingleCarPage;
