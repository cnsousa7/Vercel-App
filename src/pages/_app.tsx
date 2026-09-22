import '@/styles/globals.css';
import '@/styles/cnsousatec-cro.css';
import '@/styles/virtual-assistant.css';
import type { AppProps } from 'next/app';
import { WhatsAppFloatingButton } from '../components/cro/WhatsAppFloatingButton';
import VirtualAssistant from '../components/VirtualAssistant';
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { initGA, logPageView } from '../lib/analytics';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Necessário para evitar divergência de hidratação do next-themes.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    initGA();
  }, []);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      logPageView(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="system" 
      enableSystem={true}
      storageKey="Cnsousatec-theme"
    >
      {mounted ? (
        <>
          <Component {...pageProps} />
          <WhatsAppFloatingButton />
          <VirtualAssistant />
          <SpeedInsights />
        </>
      ) : (
        <div style={{ visibility: 'hidden' }}>
          <Component {...pageProps} />
        </div>
      )}
    </ThemeProvider>
  );
}
