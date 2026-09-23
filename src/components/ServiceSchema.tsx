interface ServiceSchemaProps {
  name: string;
  description: string;
  serviceType: string;
  serviceSlug?: string;
  canonicalUrl?: string;
  areaServed: string[];
}

const siteUrl = 'https://www.cnsousatec.com.br';
const organizationId = `${siteUrl}/#organization`;
const businessId = `${siteUrl}/#local-business`;
const logoUrl = `${siteUrl}/CNSOUSATEC-logo-restored.png`;

const serviceAreaDescription = [
  { '@type': 'AdministrativeArea', name: 'Distrito Federal' },
  { '@type': 'AdministrativeArea', name: 'Entorno do Distrito Federal' },
  { '@type': 'City', name: 'Águas Lindas de Goiás' },
];

function safeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

export default function ServiceSchema({
  name,
  description,
  serviceType,
  serviceSlug,
  canonicalUrl,
  areaServed,
}: ServiceSchemaProps) {
  const serviceUrl = canonicalUrl || (serviceSlug ? `${siteUrl}/servicos/${serviceSlug}` : siteUrl);
  const listedAreas = Array.from(new Set(areaServed));
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
        telephone: '+5561992743428',
        email: 'Cnsousatec@gmail.com',
        sameAs: [
          'https://facebook.com/cnsousatec',
          'https://instagram.com/cnsousatec',
          'https://linkedin.com/company/cnsousatec',
        ],
      },
      {
        '@type': ['LocalBusiness', 'ProfessionalService'],
        '@id': businessId,
        name: 'CNSOUSATEC - Manutenção Profissional',
        url: siteUrl,
        image: logoUrl,
        telephone: '+5561992743428',
        priceRange: '$$',
        parentOrganization: { '@id': organizationId },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Brasília',
          addressRegion: 'DF',
          addressCountry: 'BR',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -15.7939,
          longitude: -47.8828,
        },
        openingHoursSpecification: [{
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        }],
        areaServed: serviceAreaDescription,
      },
      {
        '@type': 'Service',
        '@id': `${serviceUrl}#service`,
        name,
        description,
        url: serviceUrl,
        serviceType,
        provider: { '@id': businessId },
        areaServed: [
          ...serviceAreaDescription,
          ...listedAreas.map((area) => ({ '@type': 'Place', name: area })),
        ],
        availableChannel: {
          '@type': 'ServiceChannel',
          serviceUrl: 'https://wa.me/5561992743428',
          servicePhone: {
            '@type': 'ContactPoint',
            telephone: '+5561992743428',
            contactType: 'customer service',
            availableLanguage: ['Portuguese'],
          },
        },
        offers: {
          '@type': 'Offer',
          url: serviceUrl,
          availability: 'https://schema.org/InStock',
          itemOffered: {
            '@type': 'Service',
            name,
          },
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
    />
  );
}
