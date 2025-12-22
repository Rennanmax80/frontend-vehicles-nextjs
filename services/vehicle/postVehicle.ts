import api from '@/lib/axios';
import { VehiclePayload } from '@/types/vehicle-payload';

export async function postVehicle(payload: VehiclePayload) {
  const { data } = await api.post('/veiculos', payload);
  return data;
}
