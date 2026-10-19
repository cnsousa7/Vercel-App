import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: 'website' | 'article';
  noindex?: boolean;
}

const SITE_URL = 'https://www.cnsousatec.com.br';
const SITE_NAME = 'CNSOUSATEC';
const DEFAULT_OG_IMAGE = '/CNSOUSATEC-logo-restored.png';
const DEFAULT_OG_IMAGE_ALT = 'Logo da CNSOUSATEC';

function normalizeCanonical(value: string) {
  try {
    const url = new URL(value, SITE_URL);
    url.protocol = 'https:';
    url.host = 'www.cnsousatec.com.br';
    url.search = '';
    url.hash = '';
    url.pathname = url.pathname === '/' ? '/' : url.pathname.replace(/\/+$/, '');
    return url.toString().replace(/\/$/, '') || SITE_URL;
  } catch {
    return SITE_URL;
  }
}

export default function SEO({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt = DEFAULT_OG_IMAGE_ALT,
  ogType = 'website',
  noindex = false,
}: SEOProps) {
  const canonicalUrl = normalizeCanonical(canonical || SITE_URL);
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`;
  const robots = noindex
    ? 'noindex,nofollow'
    : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1';

  return (
    <Head>
      <title>{title.trim()}</title>
      <meta name="description" content={description.trim()} />
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />
      <meta name="author" content={SITE_NAME} />
      <meta name="application-name" content={SITE_NAME} />
      <meta name="theme-color" content="#2563eb" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />

      <link rel="canonical" href={canonicalUrl} />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/CNSOUSATEC-mark.png" type="image/png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title.trim()} />
      <meta property="og:description" content={description.trim()} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1296" />
      <meta property="og:image:height" content="1213" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="pt_BR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title.trim()} />
      <meta name="twitter:description" content={description.trim()} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:image:alt" content={ogImageAlt} />
      <meta name="format-detection" content="telephone=yes" />
    </Head>
  );
}
