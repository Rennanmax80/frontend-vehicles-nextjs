import api from '@/lib/axios';
import { Vehicle } from '@/types/vehicle.types';

export async function getVehiclesByWeek() {
  const { data } = await api.get<Vehicle[]>('/veiculos/registrados/semana');
  return data;
}
