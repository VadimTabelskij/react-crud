import { styled, Stack } from '@mui/material';

export const CarsGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: theme.spacing(2),
  padding: theme.spacing(2, 0),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
}));

export const CarsCardContent = styled(Stack)(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  padding: theme.spacing(1, 2, 2),
}));

export const CarsCardTarget = styled('div')(({ theme }) => ({
  padding: theme.spacing(1, 2),
  textTransform: 'uppercase',
}));

export const ActionButtons = styled('div')(({ theme }) => ({
  position: 'absolute',
  right: 16,
  top: 8,
  display: 'flex',
  gap: theme.spacing(0.5),
  size: 'small',
  variant: 'contained',
}));
