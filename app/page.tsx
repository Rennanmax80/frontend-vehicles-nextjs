'use client';

import { Box, Button, Paper, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  return (
    <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Paper sx={{ padding: 4, width: 320 }}>
        <Typography variant="h5" mb={3}>
          Sistema de Veículos
        </Typography>

        <Button
          fullWidth
          variant="contained"
          onClick={() => router.push('/dashboard')}
        >
          ENTRAR
        </Button>
      </Paper>
    </Box>
  );
}
