import api from '@/lib/axios';

export async function deleteVehicle(id: number) {
  await api.delete(`/veiculos/${id}`);
}
