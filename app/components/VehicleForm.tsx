'use client';

import { useForm } from 'react-hook-form';
import { TextField, Checkbox, Button, FormControlLabel } from '@mui/material';
import { VehiclePayload } from '@/types/vehicle-payload';

interface Props {
  formId: string;
  defaultValues?: VehiclePayload;
  onSubmit: (data: VehiclePayload) => void;
}

export default function VehicleForm({
  formId,
  defaultValues,
  onSubmit,
}: Props) {
  const { register, handleSubmit } = useForm<VehiclePayload>({
    defaultValues,
  });

  return (
    <form id={formId} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Veículo"
        fullWidth
        margin="normal"
        {...register('veiculo')}
      />

      <TextField
        label="Marca"
        fullWidth
        margin="normal"
        {...register('marca')}
      />

      <TextField
        label="Ano"
        type="number"
        fullWidth
        margin="normal"
        {...register('ano', { valueAsNumber: true })}
      />

      <TextField
        label="Descrição"
        fullWidth
        margin="normal"
        {...register('descricao')}
      />

      <FormControlLabel
        control={<Checkbox {...register('vendido')} />}
        label="Vendido"
      />
    </form>
  );
}
