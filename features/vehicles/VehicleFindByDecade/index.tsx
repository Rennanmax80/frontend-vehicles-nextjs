'use client';

import { useQuery } from '@tanstack/react-query';
import { Box, Typography, CircularProgress } from '@mui/material';

import Table from '@/app/components/Table/page';
import { getVehiclesByDecade } from '@/services/vehicle/getVehiclesByDecade';
import VehicleTableRowByDecade from '../VehicleTableRowByDecade';

export default function VehicleFindByDecade() {
  const { data, isLoading } = useQuery({
    queryKey: ['veiculos/estatisticas/por-decada'],
    queryFn: getVehiclesByDecade,
    refetchOnWindowFocus: false,
  });

  return (
    <Box sx={{ position: 'relative', minHeight: '100%', padding: 6 }}>
      <Typography
        variant="h5"
        sx={{ marginBottom: 3, fontWeight: 'bold', color: 'black' }}
      >
        Veículos filtrados por década
      </Typography>

      {isLoading ? (
        <CircularProgress
          sx={{
            position: 'absolute',
            inset: 0,
            margin: 'auto',
          }}
        />
      ) : (
        <>
          {data && (
            <Table
              styles={{ marginTop: 3, maxHeight: '70vh' }}
              headings={['Década', 'Quantidade']}
            >
              {data.map(vehicleByDecade => (
                <VehicleTableRowByDecade
                  key={vehicleByDecade.decada}
                  vehicleByDecade={vehicleByDecade}
                />
              ))}
            </Table>
          )}
        </>
      )}
    </Box>
  );
}
