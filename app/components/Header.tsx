"use client";

import Link from "next/link";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Sistema de Veículos
        </Typography>

        <Button color="inherit" component={Link} href="/">
          Dashboard
        </Button>

        <Button color="inherit" component={Link} href="/veiculos">
          Veículos
        </Button>
      </Toolbar>
    </AppBar>
  );
}
