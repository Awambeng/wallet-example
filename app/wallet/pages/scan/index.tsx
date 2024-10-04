import { QrScanner } from '@datev/qr-scanner';
import back from '@iconify/icons-fluent/arrow-left-48-filled';
import swapCamera from '@iconify/icons-fluent/arrow-sync-24-regular';
import { Icon } from '@iconify/react';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ConnectionDialog from '../../components/scanDetails/connectionDialog';
import { useTheme } from '../../utils/theme';

export default function Index() {
  const theme = useTheme();
  const { push } = useRouter();
  const [connectionString, setConnectionString] = useState<string>('');
  const [isDetailsDialogOpen, setIsDetailsDialogOpen] =
    useState<boolean>(false);
  const [facingMode, setFacingMode] = useState<'environment' | 'user'>(
    'environment'
  );
  return (
    <>
      <ConnectionDialog
        connectionLink={connectionString}
        isDialogOpen={!!connectionString && isDetailsDialogOpen}
        closeDialog={() => {
          setIsDetailsDialogOpen(false);
          setConnectionString('');
        }}
      />

      <Box
        sx={{ display: 'grid', gridTemplateRows: 'auto 1fr', height: '100%' }}
      >
        <Box sx={{ display: 'grid', rowGap: 1 }}>
          <Box
            sx={{
              display: 'grid',
              alignContent: 'center',
              justifyContent: 'start',
              padding: '8px',
              backgroundColor: theme.palette.secondary.light,
            }}
          >
            <Tooltip arrow title="Back">
              <IconButton size="small" onClick={() => push('/')}>
                <Icon icon={back} color="black" />
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ display: 'grid', rowGap: 4, alignContent: 'start' }}>
            <Box sx={{ display: 'grid', rowGap: 1, justifyItems: 'center' }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: '500', color: theme.palette.secondary.main }}
              >
                Establish connection with DATEV eG
              </Typography>
              <Box sx={{ display: 'grid', justifyItems: 'center' }}>
                <Typography>Please scan the QR Code</Typography>
                <Typography>{`You'll be forwarded directly`}</Typography>
              </Box>
            </Box>
            <QrScanner
              onResult={(result: string) => {
                setIsDetailsDialogOpen(true);
                setConnectionString(result);
              }}
              onError={(error) => console.log(error.message)}
              facingMode={facingMode}
            />
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: 'black',
            height: '100%',
            display: 'grid',
            justifyItems: 'center',
            alignItems: 'start',
            paddingTop: 4,
          }}
        >
          <Tooltip arrow title={'Swap Camera'}>
            <IconButton
              color="secondary"
              sx={{
                backgroundColor: 'white',
                '&:hover': {
                  backgroundColor: 'white',
                },
              }}
              onClick={() =>
                setFacingMode((prev) =>
                  prev === 'environment' ? 'user' : 'environment'
                )
              }
            >
              <Icon icon={swapCamera} style={{ color: 'black' }} />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </>
  );
}
