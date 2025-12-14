'use client';

import { usePathname, useRouter } from 'next/navigation';
import {
  List, ListItem, ListItemButton, ListItemIcon, ListItemText,
  Divider, ListSubheader
} from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

export default function AsideMenu() {
  const pathname = usePathname();
  const router = useRouter();

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
      {items.map(item => (
        <ListItem key={item.path} disablePadding>
          <ListItemButton
            selected={pathname === item.path}
            onClick={() => router.push(item.path)}
          >
            <ListItemIcon><DirectionsCarIcon /></ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
