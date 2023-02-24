/* eslint-disable no-console */
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
import DeleteIcon from '@mui/icons-material/Delete';
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import * as Styled from './styled';

type CarsCardProps = CarsModel & {
  onDelete: VoidFunction,
};

const CarsCard: React.FC<CarsCardProps> = ({
  id,
  brands,
  location,
  images,
  style,
  onDelete,
}) => {
  const navigate = useNavigate();

  return (

    <Stack sx={{ boxShadow: 4, position: 'relative' }}>
      <Styled.CarsCardContent>
        <Styled.ActionButtons>
          <Button
            variant="contained"
            color="warning"
            sx={{ minWidth: 'initial', p: 0.5 }}
            onClick={() => navigate(routes.UpdateCarPage.createLink(id))}
          >
            <AutoFixNormalIcon />
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{ minWidth: 'initial', p: 0.5 }}
            onClick={onDelete}
          >
            <DeleteIcon />
          </Button>
        </Styled.ActionButtons>
        <Img src={images[0]} alt="" sx={{ aspectRatio: '1.42', width: 1, height: 1 }} />
        <List>
          <Styled.CarsCardTarget>
            <Typography variant="subtitle2" sx={{ color: 'primary.main' }}>{brands}</Typography>
            <Typography variant="subtitle2" sx={{ color: 'success.main' }}>
              {`${location.country}, ${location.city}`}
            </Typography>
            <Typography variant="subtitle2" sx={{ color: 'error.main' }}>{style}</Typography>
          </Styled.CarsCardTarget>
        </List>
        <Button
          color="primary"
          variant="contained"
          sx={{ mt: 1 }}
          onClick={() => navigate(routes.SingleCarPage.createLink(id))}
        >
          View
        </Button>
      </Styled.CarsCardContent>
    </Stack>
  );
};
export default CarsCard;
