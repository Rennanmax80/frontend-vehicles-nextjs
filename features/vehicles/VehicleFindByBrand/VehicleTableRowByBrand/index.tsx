'use client';

import { TableRow, TableCell } from '@mui/material';
import { VehicleByBrand } from '@/types/vehicle-brand.types';

export default function VehicleTableRowByBrand({ vehicleByBrand }: { vehicleByBrand: VehicleByBrand }) {
  return (
    <TableRow hover>
      <TableCell>{vehicleByBrand.marca}</TableCell>
      <TableCell>{vehicleByBrand.quantidade}</TableCell>
    </TableRow>
  );
}
