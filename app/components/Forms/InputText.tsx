'use client';

import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

export default function InputText({
  name,
  label,
  validation,
  invalid,
  helperText,
  margin = 'none',
  variant = 'outlined',
}: any) {
  return (
    <Controller
      name={name}
      control={validation}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          error={invalid}
          helperText={helperText}
          margin={margin}
          variant={variant}
          fullWidth
        />
      )}
    />
  );
}
