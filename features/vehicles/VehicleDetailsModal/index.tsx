'use client';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Stack,
  Typography,
  Divider,
} from '@mui/material';

import { Vehicle } from '@/types/vehicle.types';

interface Props {
  open: boolean;
  onClose: () => void;
  vehicle: Vehicle | null;
}

export default function VehicleDetailsModal({ open, onClose, vehicle }: Props) {
  if (!vehicle) return null;

  const { detalhes_fipe } = vehicle;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Detalhes do Veículo</DialogTitle>

      <DialogContent>
        <Stack spacing={1.5}>
          <Typography><strong>ID:</strong> {vehicle.id}</Typography>
          <Typography><strong>Marca:</strong> {vehicle.marca}</Typography>
          <Typography><strong>Veículo:</strong> {vehicle.veiculo}</Typography>
          <Typography><strong>Ano:</strong> {vehicle.ano}</Typography>
          <Typography><strong>Descrição:</strong> {vehicle.descricao}</Typography>
          <Typography><strong>Vendido:</strong> {vehicle.vendido ? 'Sim' : 'Não'}</Typography>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6">Tabela FIPE</Typography>

          {detalhes_fipe ? (
            <Stack spacing={1}>
              <Typography><strong>Modelo:</strong> {detalhes_fipe.model}</Typography>
              <Typography><strong>Marca:</strong> {detalhes_fipe.brand}</Typography>
              <Typography><strong>Ano Modelo:</strong> {detalhes_fipe.modelYear}</Typography>
              <Typography><strong>Combustível:</strong> {detalhes_fipe.fuel}</Typography>
              <Typography><strong>Preço:</strong> {detalhes_fipe.price}</Typography>
              <Typography><strong>Mês Ref.:</strong> {detalhes_fipe.referenceMonth}</Typography>
              <Typography><strong>Código FIPE:</strong> {detalhes_fipe.codeFipe}</Typography>
            </Stack>
          ) : (
            <Typography color="text.secondary">
              Sem detalhes FIPE disponíveis
            </Typography>
          )}
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Fechar</Button>
      </DialogActions>
    </Dialog>
  );
}
