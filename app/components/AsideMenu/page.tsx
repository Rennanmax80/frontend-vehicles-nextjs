'use client';

import { usePathname, useRouter } from 'next/navigation';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  ListSubheader,
  Switch,
  Box,
  Typography,
} from '@mui/material';

import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import { useThemeContext } from '@/theme';

export default function AsideMenu() {
  const pathname = usePathname();
  const router = useRouter();

  const { darkMode, toggleTheme } = useThemeContext();

  const items = [
    { label: 'Cadastro de veículos', path: '/dashboard/vehicle-panel' },
    { label: 'Por década', path: '/dashboard/vehicle-decade' },
    { label: 'Por marca', path: '/dashboard/vehicle-brand' },
  ];

  return (
    <List
      subheader={
        <>
          <ListSubheader>Administração</ListSubheader>
          <Divider />
        </>
      }
    >
      {/* 🔹 MENU */}
      {items.map(item => (
        <ListItem key={item.path} disablePadding>
          <ListItemButton
            selected={pathname === item.path}
            onClick={() => router.push(item.path)}
          >
            <ListItemIcon>
              <DirectionsCarIcon />
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        </ListItem>
      ))}

      <Divider sx={{ my: 2 }} />

      {/* 🌗 TOGGLE DE TEMA */}
      <ListItem>
        <ListItemIcon>
          {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
        </ListItemIcon>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Typography variant="body2">
            Tema {darkMode ? 'Escuro' : 'Claro'}
          </Typography>

          <Switch
            checked={darkMode}
            onChange={toggleTheme}
            color="primary"
          />
        </Box>
      </ListItem>
    </List>
  );
}
