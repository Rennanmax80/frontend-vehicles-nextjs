import api from '@/lib/axios';
import { VehicleByDecade } from '@/types/vehicle-decade.types';

export async function getVehiclesByDecade() {
  const { data } = await api.get<VehicleByDecade[]>(
    '/veiculos/estatisticas/por-decada'
  );
  return data;
}
