"use client";

import { Container, Typography, Button } from "@mui/material";
import VehicleForm from "../components/VehicleForm";

export default function VeiculosPage() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Cadastro de Veículos
      </Typography>

      <VehicleForm />
    </Container>
  );
}
