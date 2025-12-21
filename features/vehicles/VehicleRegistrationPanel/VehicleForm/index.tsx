'use client';

import { TextField, MenuItem } from '@mui/material';
import { Controller } from 'react-hook-form';

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
    <FormControl
      formId={formId}
      defaultValues={{
        veiculo: '',
        marca: '',
        ano: undefined,
        descricao: '',
        vendido: true,
        ...defaultValues,
      }}
      formValidationSchema={vehicleSchema}
      onSubmit={onSubmit}
      styles={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 16,
      }}
      render={(control: any, errors: any) => (
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

          {/* ✅ NUMBER controlado corretamente */}
          <Controller
            name="ano"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Ano"
                type="number"
                value={field.value ?? ''}
                error={!!errors.ano}
                helperText={errors.ano?.message}
                onChange={(e) =>
                  field.onChange(
                    e.target.value === ''
                      ? undefined
                      : Number(e.target.value)
                  )
                }
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

          {/* ✅ SELECT 100% controlado */}
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
