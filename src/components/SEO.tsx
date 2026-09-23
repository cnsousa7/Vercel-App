import Head from 'next/head';
import type { FAQItem } from './FAQ';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  schemaType?: 'LocalBusiness' | 'Organization' | 'Service';
  faqItems?: FAQItem[];
}

function safeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

export default function SEO({
  title,
  description,
  canonical,
  ogImage = '/CNSOUSATEC-logo-restored.png',
  ogType = 'website',
  noindex = false,
  schemaType = 'LocalBusiness',
  faqItems = [],
}: SEOProps) {
  const siteName = 'CNSOUSATEC';
  const hasBrand = title.toLowerCase().includes('cnsousatec');
  const optimizedTitle = title.includes('DF') || title.includes('Brasília')
    ? title
    : `${title} em Brasília DF | Orçamento Expresso`;
  const fullTitle = hasBrand ? optimizedTitle : `${optimizedTitle} | ${siteName}`;
  const baseUrl = 'https://www.cnsousatec.com.br';
  const canonicalUrl = (canonical || baseUrl).toLowerCase().replace(/\/$/, '');
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;
  const searchDescription = /ligue|solicite|fale|orçamento|atendimento agora/i.test(description)
    ? description
    : `${description} Solicite atendimento agora.`;

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    '@id': `${canonicalUrl}#local-business`,
    name: siteName,
    alternateName: ['Cnsousatec', 'CNSOUSATEC Brasília', 'CNSOUSATEC Manutenção'],
    description: 'Manutenção elétrica, eletrônica, hidráulica e engenharia clínica 24h no Distrito Federal e Entorno.',
    url: baseUrl,
    telephone: '+55-61-99274-3428',
    email: 'Cnsousatec@gmail.com',
    image: `${baseUrl}/CNSOUSATEC-logo-restored.png`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Brasília',
      addressRegion: 'DF',
      addressCountry: 'BR',
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Distrito Federal' },
      { '@type': 'AdministrativeArea', name: 'Entorno do Distrito Federal' },
    ],
    openingHours: 'Mo-Su 00:00-23:59',
    priceRange: '$$',
  };

  const faqSchema = faqItems.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={searchDescription} />
      <meta name="keywords" content="eletricista 24h, encanador, caça vazamentos, manutenção eletrônica, engenharia clínica, Brasília, Águas Lindas, DF, CNSOUSATEC" />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/logo-clean.png" type="image/png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={searchDescription} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="pt_BR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={searchDescription} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="author" content={siteName} />
      <meta name="language" content="pt-BR" />
      <meta name="geo.region" content="BR-DF" />
      <meta name="geo.placename" content="Brasília" />
      <meta name="geo.position" content="-15.7939;-47.8828" />
      <meta name="ICBM" content="-15.7939, -47.8828" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(schemaData) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }}
        />
      )}
    </Head>
  );
}
