import { usePWA } from '@datev/usePWA';
import { Box } from '@mui/material';
import Footer from '../components/home/Footer';
import Header from '../components/home/Header';
import HomeBody from '../components/home/HomeBody';

export default function Index() {
  usePWA();
  return (
    <Box
      sx={{
        height: '100%',
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto',
      }}
    >
      <Header />
      <HomeBody />
      <Footer />
    </Box>
  );
}
