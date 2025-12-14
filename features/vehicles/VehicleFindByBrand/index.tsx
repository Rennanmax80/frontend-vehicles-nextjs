'use client';

import { useQuery } from 'react-query';
import { Box, Typography, CircularProgress } from '@mui/material';
import Table from '@/app/components/Table/page';
import { getVehiclesByBrand } from '@/services/vehicle/getVehiclesByBrand';
import VehicleTableRowByBrand from './VehicleTableRowByBrand';

export default function VehicleFindByBrand() {
  const { data, isLoading } = useQuery({
    queryKey: ['veiculos-por-marca'],
    queryFn: getVehiclesByBrand,
  });

  return (
    <Box sx={{ padding: 6 }}>
      <Typography variant="h5" mb={3} fontWeight="bold">
        Veículos por Marca
      </Typography>

      {isLoading ? (
        <CircularProgress />
      ) : (
        data && (
          <Table headings={['Marca', 'Quantidade']} styles={{ maxHeight: '70vh' }}>
            {data.map(item => (
              <VehicleTableRowByBrand
                key={item.marca}
                vehicleByBrand={item}
              />
            ))}
          </Table>
        )
      )}
    </Box>
  );
}
