"use client";

import { Button, TextField, Stack } from "@mui/material";
import { useForm } from "react-hook-form";

type VehicleFormData = {
  modelo: string;
  marca: string;
  ano: number;
};

export default function VehicleForm() {
  const { register, handleSubmit } = useForm<VehicleFormData>();

  function onSubmit(data: VehicleFormData) {
    console.log("Veículo cadastrado:", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <TextField label="Modelo" {...register("modelo")} />
        <TextField label="Marca" {...register("marca")} />
        <TextField label="Ano" type="number" {...register("ano")} />

        <Button variant="contained" type="submit">
          Salvar
        </Button>
      </Stack>
    </form>
  );
}
