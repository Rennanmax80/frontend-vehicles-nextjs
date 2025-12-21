import api from '@/lib/axios';
import { Vehicle } from '@/types/vehicle.types';

export async function getVehicleById(id: number): Promise<Vehicle> {
  const { data } = await api.get(`/vehicles/${id}`);
  return data;
}

