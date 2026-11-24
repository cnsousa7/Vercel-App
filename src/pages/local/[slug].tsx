import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import { localidades, servicos, getLocalidadeBySlug } from '../../lib/localidades';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Testimonials from '../../components/Testimonials';
import ServicesSection from '../../components/ServicesSection';
import { motion } from 'framer-motion';
import { Phone, MapPin, CheckCircle } from 'lucide-react';
import { getLocalityWhatsAppUrl } from '../../components/cro/whatsapp';
import Breadcrumbs from '../../components/Breadcrumbs';
import SEO from '../../components/SEO';
import FAQ from '../../components/FAQ';
import LocalBusinessSchema from '../../components/LocalBusinessSchema';
import { trackWhatsAppClick } from '../../lib/analytics';

interface LocalPageProps {
  servico: string;
  servicoNome: string;
  servicoBase: string;
  localidade: string;
  localidadeNome: string;
  uf: 'DF' | 'GO';
  foco: string;
  title: string;
  description: string;
}



export default function LocalPage({ servico, servicoNome, servicoBase, localidade, localidadeNome, uf, foco, title, description }: LocalPageProps) {
  const router = useRouter();
  const isHydraulic = servico === 'manutencao-hidraulica';
  const regionalContext = foco.replace(/^Atendimento em /, '');

  useEffect(() => {
    // Se o slug na URL for diferente do slug canônico (ex: slug antigo), redireciona
    const currentSlug = router.query.slug as string;
    const canonicalSlug = `${servico}-${localidade}`;
    
    if (currentSlug && currentSlug !== canonicalSlug) {
      router.replace(`/local/${canonicalSlug}`);
    }
  }, [router, servico, localidade]);

  return (
    <>
      <SEO
        title={title}
        description={description}
        canonical={`https://www.cnsousatec.com.br/local/${servico}-${localidade}`}
      />
      <LocalBusinessSchema
        serviceName={servicoNome}
        serviceSlug={servico}
        serviceType={servicoBase}
        localityName={localidadeNome}
        localitySlug={localidade}
        uf={uf}
        description={description}
        canonicalUrl={`https://www.cnsousatec.com.br/local/${servico}-${localidade}`}
      />

      <Header />

      <main>
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[
              { label: servicoNome, href: `/servicos/${servico}` },
              { label: localidadeNome, href: `/local/${servico}-${localidade}` }
            ]} 
          />
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="bg-blue-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-10 h-10" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {servicoNome} em {localidadeNome}
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Atendimento especializado em {servicoNome} para residências, empresas e condomínios em {localidadeNome} - {uf}. Foco: {foco}
              </p>
              <a
                href={getLocalityWhatsAppUrl(localidadeNome, servicoNome)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick({ placement: 'locality_page', service: servicoNome, locality: localidadeNome, label: 'Solicitar Orçamento Expresso' })}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Solicitar Orçamento Expresso
              </a>
            </motion.div>
          </div>
        </section>

        {/* Conteúdo Principal */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                  {servicoNome} em {localidadeNome} - Atendimento Rápido e Profissional
                </h2>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  A <strong>CNSOUSATEC</strong> recebe solicitações de <strong>{servicoNome}</strong> em <strong>{localidadeNome}</strong>, na região de <strong>{regionalContext}</strong>. O atendimento é direcionado para residências, comércios e condomínios, conforme a disponibilidade da equipe e o tipo de chamado informado.
                </p>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {isHydraulic ? (
                    <>
                      Em um chamado hidráulico, vale informar se o problema envolve vazamento aparente, baixa pressão, registro, torneira, descarga, tubulação, infiltração ou entupimento. Esses detalhes ajudam a equipe a entender o atendimento necessário antes de confirmar a visita em <strong>{localidadeNome}</strong>.
                    </>
                  ) : uf === 'DF' ? (
                    <>
                      A solicitação é analisada conforme o imóvel, o equipamento e a urgência informada. Antes do atendimento, a equipe confirma a disponibilidade e os detalhes necessários para executar o serviço em <strong>{localidadeNome}</strong>.
                    </>
                  ) : (
                    <>
                      A <strong>Cnsousatec</strong> analisa o pedido de atendimento em <strong>{localidadeNome}</strong> e confirma a disponibilidade para a região informada, com orientação sobre os próximos passos e o orçamento.
                    </>
                  )}
                </p>

                <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900 dark:text-white">
                  Por Que Escolher a Cnsousatec em {localidadeNome}?
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Atendimento Local</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Equipe disponível para atendimento rápido em {localidadeNome} e região. Foco de Atendimento: <strong>{foco}</strong>.
                  </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Profissionais Qualificados</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Equipe com experiência prática em {servicoNome}; qualificações e escopo são confirmados conforme o chamado.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Orçamento Sem Compromisso</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Orçamento transparente antes de iniciar o serviço, conforme os dados do chamado.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Garantia dos Serviços</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Condições, materiais e eventual garantia são informados conforme o serviço e o orçamento aprovado.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900 dark:text-white">
                  Especialidades em {servicoNome} - Atendimento em {localidadeNome}
                </h2>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {isHydraulic ? (
                    <>O atendimento de manutenção hidráulica pode envolver diagnóstico de vazamentos, troca ou ajuste de componentes, desentupimento, reparos em pontos de consumo e avaliação de tubulações. O escopo final depende da inspeção e das informações enviadas pelo cliente.</>
                  ) : (
                    <>Nossa equipe recebe solicitações de {servicoNome} para manutenção preventiva, corretiva, instalações e adequações. O escopo, os materiais e o prazo são alinhados após a análise do chamado.</>
                  )}
                </p>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {isHydraulic ? (
                    <>
                      Para agilizar a triagem em <strong>{localidadeNome}</strong>, envie pelo WhatsApp uma breve descrição do problema, o endereço aproximado da região e, se for seguro, uma foto ou vídeo do ponto afetado. Não tente desmontar instalações pressurizadas ou mexer em componentes elétricos próximos à água.
                    </>
                  ) : uf === 'DF' ? (
                    <>
                      Em <strong>{localidadeNome}</strong>, a solicitação é avaliada de acordo com o imóvel, o equipamento e a urgência relatada. Fale com a equipe para confirmar a disponibilidade e receber a orientação adequada.
                    </>
                  ) : (
                    <>
                      Se você está em <strong>{localidadeNome}</strong> e precisa de {servicoNome}, não hesite em nos contatar. Estamos prontos para atender sua solicitação com rapidez e eficiência. Nossa missão é garantir a segurança, o conforto e a tranquilidade dos nossos clientes através de serviços de excelência, com foco em soluções práticas e acessíveis.
                    </>
                  )}
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mt-8">
                  <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">
                    Atendemos {localidadeNome} e Região
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    A Cnsousatec possui equipes móveis prontas para atender {localidadeNome} com agilidade. 
                    Entre em contato agora mesmo e agende uma visita técnica.
                  </p>
                  <a
                    href={getLocalityWhatsAppUrl(localidadeNome, servicoNome)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick({ placement: 'locality_page', service: servicoNome, locality: localidadeNome, label: 'Acionar Manutenção 24h' })}
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                  >
                    <Phone className="w-5 h-5" />
                    Acionar Manutenção 24h em {localidadeNome}
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {isHydraulic && (
          <section className="py-10 bg-cyan-50 dark:bg-gray-800" aria-labelledby="hydraulic-related-services">
            <div className="container mx-auto px-4 max-w-4xl">
              <h2 id="hydraulic-related-services" className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Outros serviços hidráulicos para {localidadeNome}
              </h2>
              <div className="flex flex-wrap gap-3">
                {[
                  ['/servicos/encanador', 'Encanador'],
                  ['/servicos/caca-vazamentos', 'Caça-vazamentos'],
                  ['/servicos/desentupimento', 'Desentupimento'],
                  ['/servicos/instalacao-hidraulica', 'Instalação hidráulica'],
                  ['/servicos/manutencao-hidraulica-predial', 'Manutenção predial'],
                ].map(([href, label]) => (
                  <a key={href} href={href} className="rounded-lg bg-white dark:bg-gray-900 px-4 py-3 text-cyan-800 dark:text-cyan-200 font-semibold underline underline-offset-4 shadow-sm">
                    {label} em {localidadeNome}
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        <ServicesSection uf={uf} />
        <Testimonials uf={uf} />

        <FAQ 
          items={[
            {
              question: `Qual o tempo de resposta para ${servicoNome} em ${localidadeNome}?`,
              answer: `Para atendimentos de ${servicoBase} em ${localidadeNome}, o prazo depende da disponibilidade da equipe, da localização e da urgência informada. Confirme as condições pelo WhatsApp antes de agendar.`
            },
            {
              question: `Como funciona um chamado urgente em ${localidadeNome}?`,
              answer: `Envie pelo WhatsApp a região, o tipo de problema e a urgência. A equipe verifica a disponibilidade para ${localidadeNome} e orienta os próximos passos, inclusive em situações hidráulicas que precisam de avaliação rápida.`
            },
            {
              question: `Como solicitar um orçamento para ${servicoBase} em ${localidadeNome}?`,
              answer: `Você pode solicitar um orçamento gratuito clicando no botão do WhatsApp em nosso site. Atendemos ${localidadeNome} com foco em ${foco}, oferecendo transparência e o melhor custo-benefício.`
            }
          ]}
        />

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Precisa de {servicoNome} em {localidadeNome}?
                </h2>
                <p className="text-xl mb-8 text-blue-100">
                  Entre em contato agora e receba um orçamento personalizado
                </p>
                <a
                  href={getLocalityWhatsAppUrl(localidadeNome, servicoNome)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick({ placement: 'locality_page', service: servicoNome, locality: localidadeNome, label: 'Solicitar Orçamento Expresso' })}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Solicitar Orçamento Expresso
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [];
  
  for (const servicoKey of Object.keys(servicos)) {
    for (const localidade of localidades) {
      paths.push({
        params: {
          slug: `${servicoKey}-${localidade.slug}`,
        },
      });
    }

  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const parts = slug.split('-');
  
  // Encontrar onde termina o serviço e começa a localidade
  let servicoKey = '';
  let localidadeSlug = '';
  
  for (let i = parts.length - 1; i >= 0; i--) {
    const possibleLocalidadeSlug = parts.slice(i).join('-');
    const localidadeData = getLocalidadeBySlug(possibleLocalidadeSlug);
    
    if (localidadeData) {
      localidadeSlug = possibleLocalidadeSlug;
      servicoKey = parts.slice(0, i).join('-');
      break;
    }
  }

  const servicoBase = servicos[servicoKey as keyof typeof servicos] || 'Serviço';
  const popularTerm = servicoKey === 'manutencao-eletrica' ? 'Eletricista' :
                      servicoKey === 'manutencao-eletronica' ? 'Técnico em Eletrônica' :
                      servicoKey === 'manutencao-hidraulica' ? 'Manutenção Hidráulica' : 'Encanador e Desentupidora';
  const servicoNome = servicoKey === 'manutencao-hidraulica'
    ? popularTerm
    : `${popularTerm} (${servicoBase})`;
  const localidadeData = getLocalidadeBySlug(localidadeSlug);

  if (!localidadeData) {
    return { notFound: true };
  }

  const { nome: localidadeNome, uf, foco } = localidadeData;
  const isHydraulic = servicoKey === 'manutencao-hidraulica';

  const title = isHydraulic
    ? `Manutenção hidráulica em ${localidadeNome} | CNSOUSATEC`
    : `${popularTerm} em ${localidadeNome} | Atendimento ${uf} | CNSOUSATEC`;
  const description = isHydraulic
    ? `Manutenção hidráulica em ${localidadeNome}, ${uf}: informe vazamentos, entupimentos ou reparos em tubulações e confirme a disponibilidade da equipe. Fale com a CNSOUSATEC.`
    : `${popularTerm} em ${localidadeNome}, ${uf}: ${servicoBase} para residências e empresas, com equipe local e orçamento expresso. Fale com a CNSOUSATEC agora.`;

  return {
    props: {
      servico: servicoKey,
      servicoNome,
      servicoBase,
      localidade: localidadeSlug,
      localidadeNome,
      uf,
      foco,
      title,
      description,
    },
  };
};
