'use client';

import { TableRow, TableCell, Button, Stack } from '@mui/material';
import { Vehicle } from '@/types/vehicle.types';
import VehicleEditButton from './VehicleEditButton';
import VehicleDeleteButton from './VehicleDeleteButton';

interface Props {
  vehicle: Vehicle;
  onDetails: (vehicle: Vehicle) => void;
}

export default function VehicleTableRow({ vehicle, onDetails }: Props) {
  return (
    <TableRow hover>
      <TableCell>{vehicle.id}</TableCell>
      <TableCell>{vehicle.ano}</TableCell>
      <TableCell>{vehicle.descricao}</TableCell>
      <TableCell>{vehicle.marca}</TableCell>
      <TableCell>{vehicle.vendido ? 'Sim' : 'Não'}</TableCell>
      <TableCell>{vehicle.veiculo}</TableCell>
      <TableCell>
        <Stack direction="row" spacing={1}>
          <Button size="small" variant="outlined" onClick={() => onDetails(vehicle)}>
            Detalhes
          </Button>
          <VehicleEditButton vehicleId={vehicle.id} />
          <VehicleDeleteButton vehicleId={vehicle.id} />
        </Stack>
      </TableCell>
    </TableRow>
  );
}
