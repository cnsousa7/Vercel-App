import SEO from '../../components/SEO';
import Header from '../../components/Header';
import ServiceSchema from '../../components/ServiceSchema';
import Breadcrumbs from '../../components/Breadcrumbs';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Zap, CheckCircle, Shield, Clock, Award } from 'lucide-react';
import { ExpressQuoteCta, UrgentMaintenanceCta } from '../../components/cro/WhatsAppCta';

export default function ManutencaoEletrica() {
  return (
    <>
      <SEO
        title="Eletricista 24h em Brasília e DF | Emergência CNSOUSATEC"
        description="Eletricista 24h para curto-circuito, quadros e instalações em Brasília e DF. Equipe qualificada, resposta rápida e orçamento expresso. Ligue agora."
        canonical="https://www.cnsousatec.com.br/servicos/manutencao-eletrica"
      />
      <ServiceSchema 
        name="Eletricista 24h Brasília e Águas Lindas"
        serviceSlug="manutencao-eletrica"
        canonicalUrl="https://www.cnsousatec.com.br/servicos/manutencao-eletrica"
        description="Serviços elétricos de emergência, curto-circuito e manutenção predial em Brasília, Águas Lindas de Goiás e todo o DF e Entorno."
        serviceType="Electrical Engineering"
        areaServed={['Brasília', 'Taguatinga', 'Águas Claras', 'Guará', 'Sudoeste', 'Asa Norte', 'Asa Sul', 'Águas Lindas de Goiás', 'Jardim Brasília', 'Mansões Centro']}
      />

      <Header />

      <main>
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Manutenção Elétrica', href: '/servicos/manutencao-eletrica' }]} />
        </div>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950 text-white py-16 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="bg-blue-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Manutenção Elétrica Profissional em Brasília
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Soluções completas em instalações e manutenção elétrica para empresas, condomínios e prédios comerciais no Distrito Federal
              </p>
              <ExpressQuoteCta />
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
                  Serviços Especializados em Manutenção Elétrica
                </h2>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  A <strong>Cnsousatec</strong> é referência em serviços de manutenção elétrica no Distrito Federal, oferecendo soluções completas e personalizadas para empresas, condomínios e estabelecimentos comerciais. Nossa equipe de profissionais altamente qualificados está preparada para atender todas as suas necessidades em instalações elétricas, desde projetos simples até sistemas complexos de alta tensão.
                </p>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Com anos de experiência no mercado, entendemos que a segurança e a eficiência do sistema elétrico são fundamentais para o funcionamento adequado de qualquer empreendimento. Por isso, trabalhamos com equipamentos de última geração e seguimos rigorosamente todas as normas técnicas da ABNT, garantindo instalações seguras, duráveis e em conformidade com as exigências legais.
                </p>

                <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900 dark:text-white">
                  Nossos Serviços de Manutenção Elétrica
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Instalações Elétricas Completas</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Projetos e execução de instalações elétricas para novos empreendimentos, expansões e reformas.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Manutenção Preventiva</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Inspeções periódicas para identificar e corrigir problemas antes que se tornem emergências.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Manutenção Corretiva</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Atendimento rápido para reparos emergenciais e solução de problemas elétricos.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Quadros de Distribuição</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Instalação, adequação e manutenção de quadros elétricos e painéis de comando.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Iluminação Industrial e Comercial</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Projetos de iluminação eficiente com tecnologia LED e sistemas inteligentes.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Aterramento e SPDA</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Sistemas de aterramento e proteção contra descargas atmosféricas (para-raios).
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900 dark:text-white">
                  Por Que Escolher a Cnsousatec?
                </h2>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Quando se trata de manutenção elétrica, a escolha do prestador de serviços é crucial para garantir segurança, qualidade e tranquilidade. A Cnsousatec se destaca no mercado por diversos motivos que fazem a diferença no resultado final do trabalho.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <Shield className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                    <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Segurança Garantida</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Todos os nossos serviços seguem rigorosamente as normas da ABNT NBR 5410 e NR-10, garantindo máxima segurança.
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <Clock className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                    <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Atendimento Rápido</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Equipe disponível para atendimentos emergenciais, minimizando o tempo de parada das suas operações.
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <Award className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                    <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Profissionais Certificados</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Eletricistas qualificados com certificação NR-10 e treinamento contínuo em novas tecnologias.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900 dark:text-white">
                  Manutenção Elétrica para Empresas e Condomínios
                </h2>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Empresas e condomínios possuem necessidades específicas quando o assunto é infraestrutura elétrica. A demanda por energia é constante e qualquer interrupção pode causar prejuízos significativos. Por isso, oferecemos planos de manutenção preventiva personalizados, que incluem inspeções regulares, testes de equipamentos, verificação de conexões e identificação precoce de problemas.
                </p>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Nossa equipe está preparada para trabalhar em ambientes comerciais e residenciais de grande porte, respeitando os horários de funcionamento e minimizando qualquer impacto nas atividades diárias. Realizamos serviços de adequação de carga, modernização de instalações antigas, instalação de geradores de emergência, sistemas de energia solar e muito mais.
                </p>

                <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900 dark:text-white">
                  Atendimento em Todo o Distrito Federal
                </h2>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  A Cnsousatec atende todas as regiões administrativas do Distrito Federal, incluindo Brasília, Taguatinga, Ceilândia, Samambaia, Águas Claras, Guará, Sobradinho, Planaltina, Gama e demais localidades. Nossa frota está estrategicamente posicionada para garantir atendimento rápido e eficiente em qualquer região.
                </p>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Seja para uma pequena manutenção ou um grande projeto de instalação elétrica, estamos prontos para atender sua necessidade com excelência, pontualidade e preços competitivos. Entre em contato conosco e solicite um orçamento sem compromisso. Nossa equipe de atendimento está pronta para esclarecer todas as suas dúvidas e oferecer a melhor solução para o seu caso.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 dark:bg-blue-900 text-white py-16 transition-colors duration-300">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Precisa de Manutenção Elétrica?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Entre em contato agora e receba um orçamento personalizado
              </p>
              <UrgentMaintenanceCta />
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
