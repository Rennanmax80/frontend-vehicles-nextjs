'use client';

import { TableRow, TableCell } from '@mui/material';
import { Vehicle } from '@/types/vehicle.types';
import VehicleEditButton from './VehicleEditButton';
import VehicleDeleteButton from './VehicleDeleteButton';

export default function VehicleTableRow({ vehicle }: { vehicle: Vehicle }) {
  return (
    <TableRow hover>
      <TableCell>{vehicle.id}</TableCell>
      <TableCell>{vehicle.ano}</TableCell>
      <TableCell>{vehicle.descricao}</TableCell>
      <TableCell>{vehicle.marca}</TableCell>
      <TableCell>{vehicle.vendido ? 'Sim' : 'Não'}</TableCell>
      <TableCell>{vehicle.veiculo}</TableCell>
      <TableCell>
        <VehicleEditButton vehicleId={vehicle.id} />
        <VehicleDeleteButton vehicleId={vehicle.id} />
      </TableCell>
    </TableRow>
  );
}
