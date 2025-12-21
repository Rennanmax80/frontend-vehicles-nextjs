import api from '@/lib/axios';
import { VehiclePayload } from '@/types/vehicle-payload';

export async function putVehicle(
  payload: VehiclePayload,
  vehicleId: number
) {
  const { data } = await api.put(`/vehicles/${vehicleId}`, payload);
  return data;
}