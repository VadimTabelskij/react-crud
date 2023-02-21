import React from 'react';
import {
  Typography,
  Stack,
  Button,
} from '@mui/material';
import Img from 'components/ui/img';
import List from '@mui/material/List';
import { useNavigate } from 'react-router-dom';
import routes from 'navigation/routes';
import * as Styled from './styled';

type CarsCardProps = CarsModel;

const CarsCard: React.FC<CarsCardProps> = ({
  id,
  brands,
  location,
  images,
  style,

}) => {
  const navigate = useNavigate();

  return (
    <Stack sx={{ boxShadow: 4 }}>
      <Styled.CarsCardContent>
        <Img src={images[2]} alt="" sx={{ aspectRatio: '1.42', width: 1 }} />
        <List>
          <Styled.CarsCardTarget>
            <Typography variant="subtitle2" sx={{ color: 'warning.main' }}>{brands}</Typography>
            <Typography variant="subtitle2" sx={{ color: 'error.dark' }}>{`${location.country}, ${location.city}`}</Typography>
            <Typography variant="subtitle2" sx={{ color: 'secondary.main' }}>{style}</Typography>
          </Styled.CarsCardTarget>
        </List>
        <Button
          color="primary"
          variant="contained"
          sx={{ mt: 3 }}
          onClick={() => navigate(routes.SingleCarPage.createLink(id))}
        >
          View
        </Button>
      </Styled.CarsCardContent>
    </Stack>
  );
};
export default CarsCard;
