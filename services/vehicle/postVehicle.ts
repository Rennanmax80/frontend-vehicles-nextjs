import api from '@/lib/axios';
import { Vehicle } from '@/types/vehicle.types';

export async function postVehicle(payload: Omit<Vehicle, 'id'>) {
  const { data } = await api.post('/veiculos', payload);
  return data;
}
