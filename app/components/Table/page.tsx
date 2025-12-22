'use client';

import { ReactNode } from 'react';
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

interface Props {
  headings: string[];
  children: ReactNode;
  styles?: object;
}

export default function Table({ headings, children, styles }: Props) {
  return (
    <TableContainer component={Paper} sx={styles}>
      <MuiTable stickyHeader>
        <TableHead>
          <TableRow>
            {(headings ?? []).map(h => (
              <TableCell key={h}>{h}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </MuiTable>
    </TableContainer>
  );
}
