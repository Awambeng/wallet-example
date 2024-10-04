import { Box, Typography } from '@mui/material';
import Image from 'next/image';

export default function HomeBody() {
  return (
    <Box
      sx={{
        backgroundColor: '#F6F7F9',
        display: 'grid',
        justifyContent: 'center',
        justifyItems: 'center',
        alignContent: 'center',
      }}
    >
      <Image src="/scan_qr.png" alt="scan qr" height={240} width={139} />
      <Typography sx={{ textAlign: 'center' }}>
        Scan the QR code and fill your DATEV Wallet with proof of your digital
        identity.
      </Typography>
    </Box>
  );
}
