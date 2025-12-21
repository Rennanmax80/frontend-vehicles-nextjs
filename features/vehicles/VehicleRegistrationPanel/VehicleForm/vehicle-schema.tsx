import { z } from 'zod';

export const vehicleSchema = z.object({
  veiculo: z.string().min(1),
  marca: z.string().min(1),
  ano: z.coerce.number().int().min(1900, 'Ano inválido'), // 🔥 CORREÇÃO
  descricao: z.string().min(1),
  vendido: z.boolean(),
});

export type VehicleSchema = z.infer<typeof vehicleSchema>;

export default vehicleSchema;
