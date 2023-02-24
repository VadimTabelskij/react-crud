import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

type StyleFieldProps = {
  color: TextFieldProps['color'],
  defualtStyle?: string,
};

const StyleField: React.FC<StyleFieldProps> = ({
  color,
  defualtStyle,
}) => (
  <TextField
    label="Style"
    name="style"
    fullWidth
    variant="filled"
    size="small"
    color={color}
    defaultValue={defualtStyle}
  />
);

export default StyleField;
