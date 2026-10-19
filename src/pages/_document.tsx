import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        {/* Favicon and app icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/CNSOUSATEC-mark.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        
        {/* Google Site Verification (Optional but recommended) */}
        <meta name="google-site-verification" content="2yoP5tDmsNpV_o8PcXiE9cTd6YSEwJsY99PcVtjufQ0" />
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
