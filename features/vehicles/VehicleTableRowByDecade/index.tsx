'use client';

import { TableRow, TableCell } from '@mui/material';
import { VehicleByDecade } from '@/types/vehicle-decade.types';

export default function VehicleTableRowByDecade({ vehicleByDecade }: { vehicleByDecade: VehicleByDecade }) {
  return (
    <TableRow hover>
      <TableCell>{vehicleByDecade.decada}</TableCell>
      <TableCell>{vehicleByDecade.quantidade}</TableCell>
    </TableRow>
  );
}
