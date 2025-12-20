'use client';

import { TextField, MenuItem } from '@mui/material';
import { Controller, UseFormReturn } from 'react-hook-form';

import FormControl from '@/app/components/Forms/FormControl';
import InputText from '@/app/components/Forms/InputText';
import vehicleSchema, { VehicleSchema } from './vehicle-schema';

interface Props {
  formId: string;
  defaultValues?: Partial<VehicleSchema>;
  onSubmit: (data: VehicleSchema) => void;
}

export default function VehicleForm({
  formId,
  defaultValues,
  onSubmit,
}: Props) {
  return (
    <FormControl<VehicleSchema>
      formId={formId}
      defaultValues={{
        vendido: true,
        ...defaultValues,
      }}
      formValidationSchema={vehicleSchema}
      onSubmit={onSubmit}
      styles={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 2,
      }}
      render={(
        control: UseFormReturn<VehicleSchema>['control'],
        errors: UseFormReturn<VehicleSchema>['formState']['errors'],
        { setValue }
      ) => (
        <>
          <InputText
            name="veiculo"
            label="Veículo"
            validation={control}
            invalid={!!errors.veiculo}
            helperText={errors.veiculo?.message}
          />

          <InputText
            name="marca"
            label="Marca"
            validation={control}
            invalid={!!errors.marca}
            helperText={errors.marca?.message}
          />

          {/* 🔥 ANO como NUMBER controlado */}
          <Controller
            name="ano"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Ano"
                type="number"
                error={!!errors.ano}
                helperText={errors.ano?.message}
                onChange={(e) => field.onChange(Number(e.target.value))}
              />
            )}
          />

          <InputText
            name="descricao"
            label="Descrição"
            validation={control}
            invalid={!!errors.descricao}
            helperText={errors.descricao?.message}
          />

          {/* 🔥 SELECT CONTROLADO (sem warning MUI) */}
          <Controller
            name="vendido"
            control={control}
            render={({ field }) => (
              <TextField
                select
                label="Vendido"
                value={field.value ? 'true' : 'false'}
                onChange={(e) =>
                  field.onChange(e.target.value === 'true')
                }
              >
                <MenuItem value="true">Sim</MenuItem>
                <MenuItem value="false">Não</MenuItem>
              </TextField>
            )}
          />
        </>
      )}
    />
  );
}
