import api from '@/lib/axios';
import { Vehicle } from '@/types/vehicle.types';

export async function postVehicle(payload: Omit<Vehicle, 'id'>) {
  await api.post('/veiculos', payload);
}
