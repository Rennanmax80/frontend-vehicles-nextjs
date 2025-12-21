'use client';

import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

interface Props {
  name: string;
  label: string;
  validation: any;
  invalid?: boolean;
  helperText?: string;
  type?: 'text' | 'number';
}

export default function InputText({
  name,
  label,
  validation,
  invalid,
  helperText,
  type = 'text',
}: Props) {
  return (
    <Controller
      name={name}
      control={validation}
      render={({ field }) => (
        <TextField
          {...field}
          type={type}
          value={field.value ?? ''}
          onChange={e => {
            const value =
              type === 'number' ? Number(e.target.value) : e.target.value;
            field.onChange(value);
          }}
          label={label}
          error={invalid}
          helperText={helperText}
          fullWidth
        />
      )}
    />
  );
}
