import React from 'react';
import { Button, ButtonProps } from '@mui/material';

type ButtonFieldProps = {
  color: ButtonProps['color'],
  btnText: string,

};

const ButtonField: React.FC<ButtonFieldProps> = ({ color, btnText }) => (
  <Button
    variant="contained"
    color={color}
    size="large"
    fullWidth
    type="submit"
  >
    {btnText}
  </Button>
);

export default ButtonField;
