'use client';

import { ReactNode } from 'react';
import MuiDialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

interface DialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  content: ReactNode;
  actions: ReactNode;
}

export default function Dialog({ open, onClose, title, content, actions }: DialogProps) {
  return (
    <MuiDialog open={open} onClose={onClose} scroll="paper">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent dividers sx={{ minWidth: 480, maxWidth: 520 }}>
        {content}
      </DialogContent>
      <DialogActions>{actions}</DialogActions>
    </MuiDialog>
  );
}
