'use client';

import { useState, useId } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Button, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

import Dialog from '@/app/components/Dialog/page';
import Feedback from '@/app/components/Feedback/page';
import VehicleForm from '../../VehicleForm';
import { getVehicleById } from '@/services/vehicle/getVehicleById';
import { putVehicle } from '@/services/vehicle/putVehicle';
import { VehicleSchema } from '../../VehicleForm/vehicle-schema';

interface Props {
  vehicleId: number;
}

export default function VehicleEditButton({ vehicleId }: Props) {
  const [open, setOpen] = useState(false);
  const formId = useId();
  const queryClient = useQueryClient();

  const vehicleQuery = useQuery<VehicleSchema>({
    queryKey: ['veiculos', vehicleId],
    queryFn: () => getVehicleById(vehicleId),
    enabled: open,
  });

  const mutation = useMutation({
    mutationFn: (payload: VehicleSchema) =>
      putVehicle(payload, vehicleId),
    onSuccess: (_, payload) => {
      queryClient.invalidateQueries(['veiculos']);
      queryClient.setQueryData(['veiculos', vehicleId], payload);
    },
  });

  const handleOpen = () => {
    setOpen(true);
    mutation.reset();
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        title={`Editar veículo ID: ${vehicleId}`}
        content={
          vehicleQuery.isLoading ? (
            <Feedback
              isLoading
              isError={false}
              isSuccess={false}
              successMessage=""
              errorMessage=""
            />
          ) : vehicleQuery.isError ? (
            <Feedback
              isLoading={false}
              isError
              isSuccess={false}
              successMessage=""
              errorMessage="Erro ao buscar veículo"
            />
          ) : (
            <Box sx={{ display: 'grid', gap: 2 }}>
              <Feedback
                successMessage="Veículo atualizado com sucesso"
                errorMessage="Erro ao atualizar veículo"
                isLoading={mutation.isLoading}
                isError={mutation.isError}
                isSuccess={mutation.isSuccess}
              />
              <VehicleForm
                formId={formId}
                defaultValues={vehicleQuery.data}
                onSubmit={mutation.mutate}
              />
            </Box>
          )
        }
        actions={
          <>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button
              form={formId}
              type="submit"
              variant="contained"
              disabled={mutation.isLoading}
            >
              Salvar
            </Button>
          </>
        }
      />

      <Button
        size="small"
        variant="contained"
        color="warning"
        onClick={handleOpen}
      >
        <EditIcon />
      </Button>
    </>
  );
}
