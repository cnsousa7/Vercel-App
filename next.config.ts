import type { NextConfig } from "next";

const legacyLocalityRedirects: Record<string, string> = {
  'santa-lucia': 'jardim-santa-lucia',
  'mansoes-centro': 'mansoes-centro-oeste',
  'parque-da-barragem': 'parque-da-barragem-setor-01',
  'jardim-paraiso': 'residencial-jardim-paraiso',
  ...Object.fromEntries(
    Array.from({ length: 16 }, (_, index) => {
      const sector = String(index + 1).padStart(2, '0');
      return [`setor-${sector}`, `parque-da-barragem-setor-${sector}`];
    }),
  ),
  // URLs antigas de regiões agregadoras, redirecionadas para páginas canônicas existentes.
  'lago-sul': 'qi-01',
  'aguas-claras': 'aguas-claras-sul',
  'taguatinga': 'taguatinga-centro',
  'lago-norte': 'qi-03',
  'jardim-barragem': 'jardim-da-barragem-i',
  'perola': 'jardim-perola-da-barragem-i',
  'vicente-pires': 'rua-03',
};

const serviceSlugs = [
  'manutencao-eletrica',
  'manutencao-hidraulica',
  'manutencao-eletronica',
];

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: false,

  // Otimização de imagens
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },

  // Headers para SEO
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },

  async redirects() {
    const generatedLegacyRedirects = Object.entries(legacyLocalityRedirects).flatMap(
      ([legacySlug, canonicalSlug]) =>
        serviceSlugs.map((serviceSlug) => ({
          source: `/local/${serviceSlug}-${legacySlug}`,
          destination: `/local/${serviceSlug}-${canonicalSlug}`,
          permanent: true,
        })),
    );

    // Regra literal para a URL específica reportada pelo GSC, preservada à frente
    // da lista gerada para garantir a prioridade no roteamento da Vercel.
    return [
      {
        source: '/local/manutencao-hidraulica-jardim-barragem',
        destination: '/local/manutencao-hidraulica-jardim-da-barragem-i',
        permanent: true,
      },
      ...generatedLegacyRedirects,
    ];
  },
};

export default nextConfig;
