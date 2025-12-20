'use client';

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import {
  Box,
  CircularProgress,
  TextField,
  Button,
  Stack,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from '@mui/material';

import Table from '@/app/components/Table/page';
import { getVehicles } from '@/services/vehicle/getVehicles';
import { getVehiclesByWeek } from '@/services/vehicle/getVehiclesByWeek';
import VehicleTableRow from './VehicleTableRow';
import VehicleAddButton from './VehicleAddButton';
import VehicleDetailsModal from '../VehicleDetailsModal';
import { Vehicle } from '@/types/vehicle.types';

export default function VehicleRegistrationPanel() {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [filtros, setFiltros] = useState({
    marca: '',
    ano: '',
    vendidos: '',
    ultimaSemana: false,
  });

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['veiculos', filtros],
    queryFn: () =>
      filtros.ultimaSemana
        ? getVehiclesByWeek()
        : getVehicles(
            filtros.marca || filtros.ano || filtros.vendidos
              ? filtros
              : undefined
          ),
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFiltros(prev => ({ ...prev, [name]: value }));
  };

  const limparFiltros = () => {
    setFiltros({ marca: '', ano: '', vendidos: '', ultimaSemana: false });
    refetch();
  };

  const handleOpenDetails = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setDetailsOpen(true);
  };


  return (
    <Box sx={{ padding: 6 }}>
      <Stack direction="row" spacing={2} mb={3}>
        <TextField label="Marca" name="marca" value={filtros.marca} onChange={handleInputChange} />
        <TextField label="Ano" name="ano" value={filtros.ano} onChange={handleInputChange} />
        <TextField label="Vendidos" name="vendidos" select value={filtros.vendidos} onChange={handleInputChange}>
          <MenuItem value="">Todos</MenuItem>
          <MenuItem value="0">Não vendidos</MenuItem>
        </TextField>
        <FormControlLabel
          control={
            <Checkbox
              checked={filtros.ultimaSemana}
              onChange={e => setFiltros(p => ({ ...p, ultimaSemana: e.target.checked }))}
            />
          }
          label="Última Semana"
        />
        <Button variant="contained" onClick={() => refetch()}>
          Aplicar
        </Button>
        <Button variant="outlined" onClick={limparFiltros}>
          Limpar
        </Button>
      </Stack>

      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <VehicleAddButton />
          {data && (
            <Table headings={['Id', 'Ano', 'Descrição', 'Marca', 'Vendido', 'Veículo', 'Ações']}>
              {data.map(vehicle => (
                <VehicleTableRow
                  key={vehicle.id}
                  vehicle={vehicle}
                  onDetails={handleOpenDetails}
                />
              ))}
            </Table>
          )}
          <VehicleDetailsModal
            open={detailsOpen}
            onClose={() => setDetailsOpen(false)}
            vehicle={selectedVehicle}
          />
        </>
      )}
    </Box>
  );
}
