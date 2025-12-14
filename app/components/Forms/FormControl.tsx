'use client';

import { ReactNode } from 'react';
import {
  useForm,
  FieldValues,
  DefaultValues,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodSchema } from 'zod';
import { Box } from '@mui/material';

interface Props<T extends FieldValues> {
  formId: string;
  defaultValues?: DefaultValues<T>;
  formValidationSchema: ZodSchema<T>;
  styles: object;
  onSubmit: (data: T) => void;
  render: (
    control: any,
    errors: any,
    helpers: {
      setValue: any;
      watch: any;
    }
  ) => ReactNode;
}

export default function FormControl<T extends FieldValues>({
  formId,
  defaultValues,
  formValidationSchema,
  styles,
  onSubmit,
  render,
}: Props<T>) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<T>({
    resolver: zodResolver(formValidationSchema),
    defaultValues,
  });

  return (
    <Box
      component="form"
      id={formId}
      onSubmit={handleSubmit(onSubmit)}
      sx={styles}
    >
      {render(control, errors, { setValue, watch })}
    </Box>
  );
}