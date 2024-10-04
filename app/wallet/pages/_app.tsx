import { InstallPWAContextProvider } from '@datev/usePWA';
import { ThemeProvider } from '@mui/material';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../public/styles/global.css';
import { useTheme } from '../utils/theme';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="manifest" href="manifest.json" />
        <link rel="icon" type="image/x-icon" href="icon-192x192.png" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="white"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="black"
        />
      </Head>
      <main className="app">
        <InstallPWAContextProvider>
          <ThemeProvider theme={useTheme()}>
            <Component {...pageProps} />
          </ThemeProvider>
        </InstallPWAContextProvider>
      </main>
    </>
  );
}

export default CustomApp;
