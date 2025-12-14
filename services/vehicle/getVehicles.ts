import api from '@/lib/axios';
import { Vehicle } from '@/types/vehicle.types';

export async function getVehicles(params?: {
  marca?: string;
  ano?: string;
  vendidos?: string;
}) {
  const { data } = await api.get<Vehicle[]>('/veiculos', { params });
  return data;
}
