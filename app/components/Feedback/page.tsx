'use client';

import { Alert, CircularProgress, Box } from '@mui/material';

interface FeedbackProps {
  successMessage: string;
  errorMessage: string;
  isSuccess: boolean;
  isError: boolean;
  isLoading: boolean;
}

export default function Feedback({
  successMessage,
  errorMessage,
  isSuccess,
  isError,
  isLoading,
}: FeedbackProps) {
  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size={28} />
      </Box>
    );
  }

  if (isSuccess) return <Alert severity="success">{successMessage}</Alert>;
  if (isError) return <Alert severity="error">{errorMessage}</Alert>;

  return null;
}
