import api from '@/lib/axios';
import { Vehicle } from '@/types/vehicle.types';

export async function getVehicleById(id: number) {
  const { data } = await api.get<Vehicle>(`/veiculos/${id}`);
  return data;
}
