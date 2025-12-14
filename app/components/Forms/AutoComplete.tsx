'use client';

import { Controller } from 'react-hook-form';
import { Autocomplete, TextField } from '@mui/material';

export default function AutoComplete({
  name,
  label,
  validation,
  options,
  invalid,
  helperText,
}: any) {
  return (
    <Controller
      name={name}
      control={validation}
      render={({ field }) => (
        <Autocomplete
          options={options}
          getOptionLabel={(o: any) => o.label}
          onChange={(_, v) => field.onChange(v?.id)}
          renderInput={params => (
            <TextField
              {...params}
              label={label}
              error={invalid}
              helperText={helperText}
            />
          )}
        />
      )}
    />
  );
}
