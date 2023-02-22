import { Theme } from '@mui/material';

export const BreakpointSwiper = (theme: Theme) => ({

  [theme.breakpoints.up('sm')]: {
    width: '350',
  },
  [theme.breakpoints.up('sm')]: {
    width: '500px',
  },
  [theme.breakpoints.up('md')]: {
    width: '900px',
  },
  [theme.breakpoints.up('lg')]: {
    width: '1210px',
  },
});
