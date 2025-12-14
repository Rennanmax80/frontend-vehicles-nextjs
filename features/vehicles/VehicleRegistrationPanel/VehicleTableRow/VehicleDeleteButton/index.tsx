'use client';

import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { Button, Typography, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import Dialog from '@/app/components/Dialog/page';
import Feedback from '@/app/components/Feedback/page';
import { deleteVehicle } from '@/services/vehicle/deleteVehicle';

interface Props {
  vehicleId: number;
}

export default function VehicleDeleteButton({ vehicleId }: Props) {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => deleteVehicle(vehicleId),
    onSuccess: () => {
      queryClient.invalidateQueries(['veiculos']);
      queryClient.setQueryData(['veiculos', vehicleId], undefined);
    },
  });

  const handleClose = () => setOpen(false);

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        title={`Excluir veículo ID: ${vehicleId}`}
        content={
          <Box sx={{ display: 'grid', gap: 2 }}>
            <Feedback
              successMessage="Veículo excluído com sucesso"
              errorMessage="Erro ao excluir veículo"
              isLoading={mutation.isLoading}
              isError={mutation.isError}
              isSuccess={mutation.isSuccess}
            />
            {!mutation.isSuccess && (
              <Typography>
                Deseja realmente excluir este veículo? Essa ação não pode ser
                desfeita.
              </Typography>
            )}
          </Box>
        }
        actions={
          mutation.isSuccess ? (
            <Button variant="contained" onClick={handleClose}>
              Concluir
            </Button>
          ) : (
            <>
              <Button onClick={handleClose}>Cancelar</Button>
              <Button
                variant="contained"
                color="error"
                disabled={mutation.isLoading}
                onClick={() => mutation.mutate()}
              >
                Excluir
              </Button>
            </>
          )
        }
      />

      <Button
        size="small"
        variant="contained"
        color="error"
        onClick={() => setOpen(true)}
      >
        <DeleteIcon />
      </Button>
    </>
  );
}
