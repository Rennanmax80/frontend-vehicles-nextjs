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
import { Vehicle } from '@/types/vehicle.types';
import { VehiclePayload } from '@/types/vehicle-payload';

interface Props {
  vehicleId: number;
}

export default function VehicleEditButton({ vehicleId }: Props) {
  const [open, setOpen] = useState(false);
  const formId = useId();
  const queryClient = useQueryClient();

  const vehicleQuery = useQuery<Vehicle>({
    queryKey: ['veiculos', vehicleId],
    queryFn: () => getVehicleById(vehicleId),
    enabled: open,
  });

  const mutation = useMutation({
    mutationFn: (payload: VehiclePayload) =>
      putVehicle(payload, vehicleId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['veiculos'] });
      queryClient.invalidateQueries({
        queryKey: ['veiculos', vehicleId],
      });
    },
  });

  const handleOpen = () => {
    setOpen(true);
    mutation.reset();
  };

  const handleClose = () => setOpen(false);

  // 🔹 converte Vehicle → VehiclePayload
  const defaultValues: VehiclePayload | undefined =
    vehicleQuery.data
      ? {
          veiculo: vehicleQuery.data.veiculo,
          marca: vehicleQuery.data.marca,
          ano: vehicleQuery.data.ano,
          descricao: vehicleQuery.data.descricao,
          vendido: Boolean(vehicleQuery.data.vendido),
        }
      : undefined;

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        title={`Editar veículo ID: ${vehicleId}`}
        content={
          vehicleQuery.isLoading ? (
            <Feedback isLoading />
          ) : vehicleQuery.isError ? (
            <Feedback
              isError
              errorMessage="Erro ao buscar veículo"
            />
          ) : (
            <Box sx={{ display: 'grid', gap: 2 }}>
              <Feedback
                successMessage="Veículo atualizado com sucesso"
                errorMessage="Erro ao atualizar veículo"
                isLoading={mutation.isPending}
                isError={mutation.isError}
                isSuccess={mutation.isSuccess}
              />

              <VehicleForm
                formId={formId}
                defaultValues={defaultValues}
                onSubmit={(data: VehiclePayload) =>
                  mutation.mutate(data)
                }
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
              disabled={mutation.isPending}
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
