'use client';

import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { AuthService } from '@/services/auth.service';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setLoading(true);
    try {
      await AuthService.sendMagicLink(email);
      alert('Magic link enviado! Verifique o console do backend 👀');
    } catch (error) {
      alert('Erro ao enviar link');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Paper sx={{ padding: 4, width: 360 }}>
        <Typography variant="h5" mb={3}>
          Sistema de Veículos
        </Typography>

        <TextField
          label="Email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 2 }}
        />

        <Button
          fullWidth
          variant="contained"
          onClick={handleLogin}
          disabled={loading || !email}
        >
          {loading ? 'Enviando...' : 'Entrar'}
        </Button>
      </Paper>
    </Box>
  );
}
