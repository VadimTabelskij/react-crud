import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

type BrandFieldProps = {
  color: TextFieldProps['color'],
  defualtBrand?: string,
};

const BrandField: React.FC<BrandFieldProps> = ({
  color,
  defualtBrand,
}) => (
  <TextField
    label="Brands"
    name="brands"
    fullWidth
    variant="filled"
    size="small"
    color={color}
    defaultValue={defualtBrand}
  />
);

export default BrandField;
