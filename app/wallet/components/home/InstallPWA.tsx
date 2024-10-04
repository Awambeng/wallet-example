import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useTheme } from '../../utils/theme';
import { usePWA } from '@datev/usePWA';

export default function InstallPWA() {
  const theme = useTheme();
  const { installApp } = usePWA();
  return (
    <Box
      sx={{
        display: 'grid',
        gridAutoFlow: 'column',
        columnGap: 0.5,
        alignItems: 'center',
        padding: '8px',
        backgroundColor: theme.palette.secondary.light,
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: '500' }}>
        To access the app from your phone, install now
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={installApp}
      >
        Install
      </Button>
    </Box>
  );
}
