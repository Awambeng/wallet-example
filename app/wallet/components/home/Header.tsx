import { Icon } from '@iconify/react';
import search from '@iconify/icons-fluent/search-32-regular';
import { Box, InputAdornment, TextField, Typography } from '@mui/material';

export default function Header() {
  return (
    <Box
      sx={{
        padding: '0 16px',
        display: 'grid',
        gap: 1.2,
        marginBottom: 2,
      }}
    >
      <Typography variant="h2">DATEV-Wallet</Typography>
      <TextField
        variant="outlined"
        size="small"
        fullWidth
        placeholder="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{ width: 'auto' }}>
              <Icon
                icon={search}
                style={{ marginRight: '8px', fontSize: '24px' }}
              />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
