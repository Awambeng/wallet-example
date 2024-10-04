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
        Connect with Confidence, Manage Your Wallet Seamlessly
        <p>Unlock the full potential of your wallet by securely managing your contacts and digital assets, all in one place.</p>
      </Typography>
    </Box>
  );
}
