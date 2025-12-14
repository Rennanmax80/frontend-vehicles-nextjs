import api from '@/lib/axios';
import { Vehicle } from '@/types/vehicle.types';

export async function putVehicle(
  payload: Omit<Vehicle, 'id'>,
  vehicleId: number
) {
  await api.put(`/veiculos/${vehicleId}`, payload);
}
