"use client";

import { Container, Typography } from "@mui/material";
import { useId } from "react";
import VehicleForm from "../components/VehicleForm";
import { VehicleSchema } from "@/features/vehicles/VehicleRegistrationPanel/VehicleForm/vehicle-schema";
import { postVehicle } from "@/services/vehicle/postVehicle";

export default function VeiculosPage() {
  const formId = useId();

  const handleSubmit = (data: VehicleSchema) => {
    postVehicle(data);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Cadastro de Veículos
      </Typography>

      <VehicleForm
        formId={formId}
        onSubmit={handleSubmit}
      />
    </Container>
  );
}
