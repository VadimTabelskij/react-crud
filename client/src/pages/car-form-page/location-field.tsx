import React from 'react';
import {
  TextField,
  TextFieldProps,
  Box,
} from '@mui/material';

type LocationFieldProps = {
  color: TextFieldProps['color'],

};

const LocationField: React.FC<LocationFieldProps> = ({ color }) => (
  <Box sx={{ display: 'flex', width: 1, gap: 2 }}>
    <TextField
      label="Country"
      name="country"
      fullWidth
      variant="filled"
      size="small"
      color={color}
    />
    <TextField
      label="City"
      name="city"
      fullWidth
      variant="filled"
      size="small"
      color={color}
    />
  </Box>
);

export default LocationField;
