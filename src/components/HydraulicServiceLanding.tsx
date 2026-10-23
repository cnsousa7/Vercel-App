import SEO from './SEO';
import Header from './Header';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';
import ServiceSchema from './ServiceSchema';
import { CheckCircle, Droplet, Wrench } from 'lucide-react';
import { CustomWhatsAppCta } from './cro/WhatsAppCta';

export interface HydraulicServiceLandingProps {
  title: string;
  description: string;
  canonical: string;
  heading: string;
  intro: string;
  services: string[];
  guidanceTitle: string;
  guidance: string[];
  whatsappMessage: string;
}

const relatedPages = [
  { href: '/servicos/manutencao-hidraulica', label: 'Manutenção hidráulica' },
  { href: '/servicos/encanador', label: 'Encanador' },
  { href: '/servicos/caca-vazamentos', label: 'Caça-vazamentos' },
  { href: '/servicos/desentupimento', label: 'Desentupimento' },
];

export default function HydraulicServiceLanding({
  title,
  description,
  canonical,
  heading,
  intro,
  services,
  guidanceTitle,
  guidance,
  whatsappMessage,
}: HydraulicServiceLandingProps) {
  return (
    <>
      <SEO title={title} description={description} canonical={canonical} />
      <ServiceSchema
        name={heading}
        serviceSlug={canonical.split('/').pop()}
        canonicalUrl={canonical}
        description={description}
        serviceType="Plumbing Service"
        areaServed={['Brasília', 'Distrito Federal', 'Entorno do Distrito Federal', 'Águas Lindas de Goiás']}
      />

      <Header />
      <main>
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: heading, href: canonical.replace('https://www.cnsousatec.com.br', '') }]} />
        </div>

        <section className="bg-gradient-to-br from-cyan-600 to-cyan-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-cyan-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                <Droplet className="w-10 h-10" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{heading}</h1>
              <p className="text-xl text-cyan-100 mb-8">{intro}</p>
              <CustomWhatsAppCta message={whatsappMessage}>
                Solicitar atendimento hidráulico
              </CustomWhatsAppCta>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Como podemos ajudar</h2>
              <div className="grid md:grid-cols-2 gap-5 mb-14">
                {services.map((service) => (
                  <div key={service} className="flex gap-3 rounded-lg border border-gray-100 dark:border-gray-700 p-5">
                    <CheckCircle className="w-6 h-6 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-1" aria-hidden="true" />
                    <p className="text-lg text-gray-700 dark:text-gray-300">{service}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{guidanceTitle}</h2>
              <div className="space-y-5 mb-14">
                {guidance.map((paragraph) => (
                  <p key={paragraph} className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{paragraph}</p>
                ))}
              </div>

              <div className="rounded-xl bg-cyan-50 dark:bg-gray-800 border border-cyan-100 dark:border-gray-700 p-6 md:p-8 mb-14">
                <div className="flex gap-4 items-start">
                  <Wrench className="w-8 h-8 text-cyan-700 dark:text-cyan-300 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Fale sobre o seu problema</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-5">
                      Informe a região, o tipo de problema e, se possível, quando ele começou. A equipe poderá avaliar as informações e confirmar a disponibilidade do atendimento.
                    </p>
                    <CustomWhatsAppCta message={whatsappMessage}>
                      Falar sobre meu problema
                    </CustomWhatsAppCta>
                  </div>
                </div>
              </div>

              <nav aria-label="Outros serviços hidráulicos" className="border-t border-gray-200 dark:border-gray-700 pt-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Veja também</h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {relatedPages
                    .filter((page) => page.href !== `/servicos/${canonical.split('/').pop()}`)
                    .map((page) => (
                      <li key={page.href}>
                        <a className="text-cyan-700 dark:text-cyan-300 underline underline-offset-4" href={page.href}>
                          {page.label}
                        </a>
                      </li>
                    ))}
                </ul>
              </nav>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
