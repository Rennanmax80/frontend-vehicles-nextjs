'use client';

import { Box, Paper } from '@mui/material';
import AsideMenu from '@/app/components/AsideMenu/page';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Paper sx={{ width: 280 }} elevation={2}>
        <AsideMenu />
      </Paper>
      <Box sx={{ flex: 1 }}>{children}</Box>
    </Box>
  );
}
