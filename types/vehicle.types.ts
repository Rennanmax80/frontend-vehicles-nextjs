export interface Vehicle {
  id: number;
  marca: string;
  veiculo: string;
  ano: number;
  descricao: string;
  vendido: number;
  created: string;
  updated: string;
  detalhes_fipe: DetalhesFipe | null;
}

export interface DetalhesFipe {
  brand: string;
  codeFipe: string;
  fuel: string;
  fuelAcronym: string;
  model: string;
  modelYear: number;
  price: string;
  referenceMonth: string;
  vehicleType: number;
}
