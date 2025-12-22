'use client';

import { useState, useId } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button, Box } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

import Dialog from '@/app/components/Dialog/page';
import Feedback from '@/app/components/Feedback/page';
import VehicleForm from '../VehicleForm';
import { postVehicle } from '@/services/vehicle/postVehicle';
import { VehiclePayload } from '@/types/vehicle-payload';

export default function VehicleAddButton() {
  const formId = useId();
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);

  const mutation = useMutation({
    mutationFn: (data: VehiclePayload) => postVehicle(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['veiculos'] });
      setOpen(false);
    },
  });

  return (
    <>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        title="Cadastrar veículo"
        content={
          <Box>
            <Feedback
              isLoading={mutation.isPending}
              isError={mutation.isError}
              isSuccess={mutation.isSuccess}
              successMessage="Veículo cadastrado com sucesso"
              errorMessage="Erro ao cadastrar veículo"
            />

            {!mutation.isPending && (
              <VehicleForm
                formId={formId}
                onSubmit={(data: VehiclePayload) =>
                  mutation.mutate(data)
                }
              />
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

      <Button
        variant="contained"
        endIcon={<DirectionsCarIcon />}
        onClick={() => setOpen(true)}
      >
        Cadastrar Veículo
      </Button>
    </>
  );
}
