import '@/styles/globals.css';
import '@/styles/cnsousatec-cro.css';
import '@/styles/virtual-assistant.css';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { WhatsAppFloatingButton } from '../components/cro/WhatsAppFloatingButton';
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { initGA, logPageView } from '../lib/analytics';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';

const GOOGLE_ADS_ID = 'AW-18231540361';

const VirtualAssistant = dynamic(() => import('../components/VirtualAssistant'), {
  ssr: false,
  loading: () => null,
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [assistantReady, setAssistantReady] = useState(false);

  useEffect(() => {
    const loadAnalytics = () => initGA();
    const idleWindow = window as Window & {
      requestIdleCallback?: (callback: () => void) => number;
      cancelIdleCallback?: (handle: number) => void;
    };
    const usesIdleCallback = typeof idleWindow.requestIdleCallback === 'function';
    const idleHandle = idleWindow.requestIdleCallback
      ? idleWindow.requestIdleCallback(loadAnalytics)
      : window.setTimeout(loadAnalytics, 2000);

    return () => {
      if (usesIdleCallback && idleWindow.cancelIdleCallback) {
        idleWindow.cancelIdleCallback(idleHandle);
      } else {
        window.clearTimeout(idleHandle);
      }
    };
  }, []);

  useEffect(() => {
    const enableAssistant = () => setAssistantReady(true);
    const idleWindow = window as Window & {
      requestIdleCallback?: (callback: () => void) => number;
      cancelIdleCallback?: (handle: number) => void;
    };
    const usesIdleCallback = typeof idleWindow.requestIdleCallback === 'function';
    const idleHandle = idleWindow.requestIdleCallback
      ? idleWindow.requestIdleCallback(enableAssistant)
      : window.setTimeout(enableAssistant, 2500);

    return () => {
      if (usesIdleCallback && idleWindow.cancelIdleCallback) {
        idleWindow.cancelIdleCallback(idleHandle);
      } else {
        window.clearTimeout(idleHandle);
      }
    };
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
      <Component {...pageProps} />
      <WhatsAppFloatingButton />
      {assistantReady && <VirtualAssistant />}
      <Script id="google-ads-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ADS_ID}');
        `}
      </Script>
      <Script
        id="google-ads-script"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />
      <Analytics />
      <SpeedInsights />
    </ThemeProvider>
  );
}
