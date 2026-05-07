import { Html, Head, Main, NextScript } from 'next/document';
import SchemaLocalBusiness from '../components/SchemaLocalBusiness';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        {/* Favicon and app icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo-clean.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        
        {/* Google Site Verification (Optional but recommended) */}
        <meta name="google-site-verification" content="2yoP5tDmsNpV_o8PcXiE9cTd6YSEwJsY99PcVtjufQ0" />
        
        {/* Logo for social media */}
        <meta property="og:image" content="/logo-clean.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        <SchemaLocalBusiness />
        
        {/* Google Analytics (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MX2VGWPM7J"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MX2VGWPM7J', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
