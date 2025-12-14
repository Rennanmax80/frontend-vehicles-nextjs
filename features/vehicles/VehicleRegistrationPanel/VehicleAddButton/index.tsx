'use client';

import { useState, useId } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { Button, Box } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

import Dialog from '@/app/components/Dialog/page';
import Feedback from '@/app/components/Feedback/page';
import VehicleForm from '../VehicleForm';
import { postVehicle } from '@/services/vehicle/postVehicle';
import { VehicleSchema } from '../VehicleForm/vehicle-schema';

export default function VehicleAddButton() {
  const formId = useId();
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);

  const mutation = useMutation({
    mutationFn: postVehicle,
    onSuccess: () => queryClient.invalidateQueries(['veiculos']),
  });

  return (
    <>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        title="Cadastrar veículo"
        content={
          <Box>
            <Feedback {...mutation} successMessage="Veículo cadastrado" errorMessage="Erro ao cadastrar" />
            {!mutation.isLoading && (
              <VehicleForm formId={formId} onSubmit={mutation.mutate} defaultValues={null} />
            )}
          </Box>
        }
        actions={
          <>
            <Button onClick={() => setOpen(false)}>Cancelar</Button>
            <Button form={formId} type="submit" variant="contained">
              Salvar
            </Button>
          </>
        }
      />
      <Button variant="contained" endIcon={<DirectionsCarIcon />} onClick={() => setOpen(true)}>
        Cadastrar Veículo
      </Button>
    </>
  );
}
