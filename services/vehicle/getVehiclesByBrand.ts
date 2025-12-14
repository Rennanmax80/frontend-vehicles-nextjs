import api from '@/lib/axios';
import { VehicleByBrand } from '@/types/vehicle-brand.types';

export async function getVehiclesByBrand() {
  const { data } = await api.get<VehicleByBrand[]>(
    '/veiculos/estatisticas/por-marca'
  );
  return data;
}
