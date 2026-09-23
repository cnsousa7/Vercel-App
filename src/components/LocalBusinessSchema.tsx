import { WHATSAPP_NUMBER, getGeneralWhatsAppUrl } from './cro/whatsapp';

type Uf = 'DF' | 'GO';

interface LocalBusinessSchemaProps {
  serviceName?: string;
  serviceSlug?: string;
  serviceType?: string;
  localityName?: string;
  localitySlug?: string;
  uf?: Uf;
  description?: string;
  canonicalUrl?: string;
}

const siteUrl = 'https://www.cnsousatec.com.br';
const organizationId = `${siteUrl}/#organization`;
const businessId = `${siteUrl}/#local-business`;
const logoUrl = `${siteUrl}/CNSOUSATEC-logo-restored.png`;

const socialProfiles = [
  'https://facebook.com/cnsousatec',
  'https://instagram.com/cnsousatec',
  'https://linkedin.com/company/cnsousatec',
];

const headquartersAddress = {
  '@type': 'PostalAddress',
  addressLocality: 'Brasília',
  addressRegion: 'DF',
  addressCountry: 'BR',
};

const openingHoursSpecification = {
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  opens: '00:00',
  closes: '23:59',
};

function safeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

export default function LocalBusinessSchema({
  serviceName,
  serviceSlug,
  serviceType,
  localityName,
  localitySlug,
  uf = 'DF',
  description,
  canonicalUrl = siteUrl,
}: LocalBusinessSchemaProps) {
  const isLocalPage = Boolean(localityName);
  const localBusinessId = isLocalPage ? `${canonicalUrl}#local-business` : businessId;
  const displayName = serviceName && localityName
    ? `CNSOUSATEC - ${serviceName} em ${localityName}`
    : 'CNSOUSATEC - Manutenção Elétrica, Eletrônica e Hidráulica';
  const localAreaName = localityName ? `${localityName}, ${uf}` : 'Brasília e Distrito Federal';
  const serviceUrl = serviceSlug && localitySlug
    ? `${siteUrl}/local/${serviceSlug}-${localitySlug}`
    : canonicalUrl;
  const whatsappUrl = getGeneralWhatsAppUrl();

  const areaServed = isLocalPage
    ? [{
        '@type': 'Place',
        name: localAreaName,
        address: {
          '@type': 'PostalAddress',
          addressLocality: localityName,
          addressRegion: uf,
          addressCountry: 'BR',
        },
      }]
    : [
        { '@type': 'AdministrativeArea', name: 'Distrito Federal' },
        { '@type': 'AdministrativeArea', name: 'Entorno do Distrito Federal' },
        { '@type': 'City', name: 'Águas Lindas de Goiás' },
      ];

  const business: Record<string, unknown> = {
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': localBusinessId,
    name: displayName,
    alternateName: ['Cnsousatec', 'CNSOUSATEC Brasília', 'CNSOUSATEC Manutenção'],
    description: description || 'Serviços especializados de manutenção elétrica, eletrônica, hidráulica e engenharia clínica em Brasília, Distrito Federal e Entorno.',
    url: canonicalUrl,
    telephone: `+${WHATSAPP_NUMBER}`,
    email: 'Cnsousatec@gmail.com',
    logo: logoUrl,
    image: logoUrl,
    priceRange: '$$',
    parentOrganization: { '@id': organizationId },
    branchOf: { '@id': organizationId },
    areaServed,
    serviceArea: areaServed,
    openingHoursSpecification: [openingHoursSpecification],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: `+${WHATSAPP_NUMBER}`,
      contactType: 'customer service',
      areaServed: 'BR',
      availableLanguage: ['Portuguese'],
    },
    potentialAction: {
      '@type': 'CommunicateAction',
      name: 'Solicitar orçamento pelo WhatsApp',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: whatsappUrl,
        actionPlatform: [
          'https://schema.org/DesktopWebPlatform',
          'https://schema.org/MobileWebPlatform',
        ],
      },
    },
    sameAs: socialProfiles,
    knowsAbout: [
      'Manutenção elétrica',
      'Manutenção hidráulica',
      'Manutenção eletrônica',
      'Engenharia clínica',
    ],
    mainEntityOfPage: canonicalUrl,
  };

  if (!isLocalPage) {
    business.address = headquartersAddress;
    business.geo = {
      '@type': 'GeoCoordinates',
      latitude: -15.7939,
      longitude: -47.8828,
    };
  }

  if (serviceName) {
    business.hasOfferCatalog = {
      '@type': 'OfferCatalog',
      name: `${serviceName} - CNSOUSATEC`,
      itemListElement: [{
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: serviceName,
          serviceType: serviceType || serviceName,
          areaServed,
          provider: { '@id': localBusinessId },
          url: serviceUrl,
          description: description || `${serviceName} especializado para ${localAreaName}.`,
        },
      }],
    };
  }

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: 'CNSOUSATEC',
        legalName: 'CNSOUSATEC',
        url: siteUrl,
        logo: logoUrl,
        image: logoUrl,
        telephone: `+${WHATSAPP_NUMBER}`,
        email: 'Cnsousatec@gmail.com',
        sameAs: socialProfiles,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: `+${WHATSAPP_NUMBER}`,
          contactType: 'customer service',
          availableLanguage: ['Portuguese'],
        },
      },
      business,
    ],
  };


  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
    />
  );
}

export { siteUrl, organizationId, businessId };
export type { LocalBusinessSchemaProps };
