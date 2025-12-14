'use client';

import FormControl from '@/app/components/Forms/FormControl';
import InputText from '@/app/components/Forms/InputText';
import vehicleSchema, { VehicleSchema } from './vehicle-schema';
import { MenuItem, TextField } from '@mui/material';

interface Props {
  formId: string;
  defaultValues: Partial<VehicleSchema> | null;
  onSubmit: (data: VehicleSchema) => void;
}

export default function VehicleForm({ formId, defaultValues, onSubmit }: Props) {
  return (
    <FormControl
      formId={formId}
      defaultValues={defaultValues}
      formValidationSchema={vehicleSchema}
      onSubmit={onSubmit}
      styles={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}
      render={(control, errors, { setValue }) => (
        <>
          <InputText name="ano" label="Ano" validation={control} invalid={!!errors.ano} helperText={errors.ano?.message} />
          <InputText name="descricao" label="Descrição" validation={control} invalid={!!errors.descricao} helperText={errors.descricao?.message} />
          <InputText name="marca" label="Marca" validation={control} invalid={!!errors.marca} helperText={errors.marca?.message} />
          <TextField
            select
            label="Vendido"
            defaultValue={defaultValues?.vendido ?? true}
            onChange={e => setValue('vendido', e.target.value === 'true')}
          >
            <MenuItem value="true">Sim</MenuItem>
            <MenuItem value="false">Não</MenuItem>
          </TextField>
          <InputText name="veiculo" label="Veículo" validation={control} invalid={!!errors.veiculo} helperText={errors.veiculo?.message} />
        </>
      )}
    />
  );
}
