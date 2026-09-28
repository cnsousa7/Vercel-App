import SEO from '../../components/SEO';
import Header from '../../components/Header';
import ServiceSchema from '../../components/ServiceSchema';
import Breadcrumbs from '../../components/Breadcrumbs';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Wrench, CheckCircle, Droplet, Shield, Clock } from 'lucide-react';
import { ExpressQuoteCta, UrgentMaintenanceCta } from '../../components/cro/WhatsAppCta';

export default function ManutencaoHidraulica() {
  return (
    <>
      <SEO
        title="Encanador e Caça-Vazamentos 24h no DF | CNSOUSATEC"
        description="Encanador 24h em Brasília e Entorno para vazamentos, desentupimento e reparos hidráulicos. Atendimento rápido e orçamento expresso. Ligue agora."
        canonical="https://www.cnsousatec.com.br/servicos/manutencao-hidraulica"
      />
      <ServiceSchema 
        name="Encanador 24h Brasília e Águas Lindas"
        serviceSlug="manutencao-hidraulica"
        canonicalUrl="https://www.cnsousatec.com.br/servicos/manutencao-hidraulica"
        description="Serviços de encanador de emergência, caça vazamentos e desentupimento em Brasília, Águas Lindas de Goiás e todo o Entorno."
        serviceType="Plumbing Service"
        areaServed={['Brasília', 'Taguatinga', 'Águas Claras', 'Guará', 'Sudoeste', 'Asa Norte', 'Asa Sul', 'Águas Lindas de Goiás', 'Jardim Brasília', 'Mansões Centro']}
      />

      <Header />

      <main>
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Manutenção Hidráulica', href: '/servicos/manutencao-hidraulica' }]} />
        </div>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cyan-600 to-cyan-800 text-white py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="bg-cyan-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="w-10 h-10" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Manutenção Hidráulica Profissional em Brasília
              </h1>
              <p className="text-xl text-cyan-100 mb-8">
                Serviços completos em sistemas hidráulicos, tubulações e instalações prediais para empresas e condomínios no Distrito Federal
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
                  Serviços Especializados em Manutenção Hidráulica
                </h2>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  A <strong>Cnsousatec</strong> é referência em serviços de manutenção hidráulica no Distrito Federal, oferecendo soluções completas para empresas, condomínios, prédios comerciais e estabelecimentos de diversos segmentos. Nossa equipe de profissionais qualificados está preparada para atender desde pequenos reparos até grandes projetos de instalação e reforma de sistemas hidráulicos.
                </p>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Sabemos que problemas hidráulicos podem causar transtornos significativos, desde vazamentos que aumentam o consumo de água até interrupções no abastecimento que afetam as operações diárias. Por isso, trabalhamos com agilidade, eficiência e utilizando materiais de primeira qualidade, garantindo soluções duradouras e em conformidade com as normas técnicas da ABNT.
                </p>

                <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900 dark:text-white">
                  Nossos Serviços de Manutenção Hidráulica
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Detecção e Reparo de Vazamentos</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Identificação precisa de vazamentos com equipamentos especializados e reparo rápido.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Instalações Hidráulicas</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Projetos e execução de instalações hidráulicas completas para novos empreendimentos.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Desentupimento</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Desentupimento de pias, ralos, vasos sanitários, colunas e redes de esgoto.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Manutenção de Caixas d&apos;Água</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Limpeza, higienização e reparo de caixas d&apos;água e reservatórios.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Troca de Registros e Torneiras</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Substituição e instalação de registros, torneiras, válvulas e conexões.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Sistemas de Recalque</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Instalação e manutenção de bombas de recalque e pressurizadores.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900 dark:text-white">
                  Por Que Escolher a Cnsousatec?
                </h2>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  A escolha de um prestador de serviços hidráulicos de confiança é fundamental para garantir a qualidade do trabalho e evitar problemas futuros. A Cnsousatec se destaca no mercado por oferecer um serviço completo, desde o diagnóstico até a execução e o pós-venda, sempre com foco na satisfação do cliente.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <Droplet className="w-12 h-12 text-cyan-600 dark:text-cyan-400 mb-4" />
                    <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Economia de Água</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Identificamos e corrigimos vazamentos, reduzindo o desperdício e os custos com água.
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <Clock className="w-12 h-12 text-cyan-600 dark:text-cyan-400 mb-4" />
                    <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Atendimento Emergencial</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Equipe disponível para atendimentos urgentes, minimizando danos e transtornos.
                    </p>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <Shield className="w-12 h-12 text-cyan-600 dark:text-cyan-400 mb-4" />
                    <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Materiais de Qualidade</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Utilizamos apenas materiais certificados e de marcas reconhecidas no mercado.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900 dark:text-white">
                  Manutenção Hidráulica Predial
                </h2>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  A manutenção hidráulica predial é essencial para garantir o bom funcionamento das instalações de água e esgoto em edifícios comerciais, condomínios e empresas. Problemas como vazamentos, entupimentos e baixa pressão de água podem afetar o conforto dos usuários e causar danos à estrutura do imóvel. A Cnsousatec oferece planos de manutenção preventiva que incluem inspeções periódicas, limpeza de caixas d&apos;água, verificação de bombas e registros, e identificação precoce de problemas.
                </p>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Nossa equipe está capacitada para trabalhar em prédios de todos os portes, respeitando as normas de segurança e minimizando o impacto nas atividades diárias dos ocupantes. Realizamos serviços de troca de tubulações antigas, adequação de sistemas hidráulicos às normas vigentes, instalação de sistemas de reuso de água, e muito mais.
                </p>

                <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900 dark:text-white">
                  Detecção de Vazamentos com Tecnologia
                </h2>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Vazamentos ocultos são um dos principais vilões do desperdício de água e podem causar danos estruturais graves se não forem detectados a tempo. A Cnsousatec utiliza equipamentos de última geração para detecção de vazamentos, incluindo geofones eletrônicos, correlacionadores de ruído e câmeras termográficas. Essas tecnologias permitem identificar vazamentos em tubulações enterradas, embutidas em paredes ou sob pisos, sem a necessidade de quebras desnecessárias.
                </p>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Após a detecção precisa do vazamento, nossa equipe realiza o reparo com técnicas modernas e minimamente invasivas, restaurando a integridade do sistema hidráulico e evitando desperdícios. Esse serviço é especialmente importante para condomínios e empresas que desejam reduzir custos com água e preservar o meio ambiente.
                </p>

                <h2 className="text-3xl font-bold mb-6 mt-12 text-gray-900 dark:text-white">
                  Atendimento em Todo o Distrito Federal
                </h2>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  A Cnsousatec atende todas as regiões administrativas do Distrito Federal, incluindo Brasília, Taguatinga, Ceilândia, Samambaia, Águas Claras, Guará, Sobradinho, Planaltina, Gama e demais localidades. Nossa frota está estrategicamente posicionada para garantir atendimento rápido e eficiente em qualquer região.
                </p>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Seja para uma pequena manutenção ou um grande projeto de instalação hidráulica, estamos prontos para atender sua necessidade com excelência, pontualidade e preços competitivos. Entre em contato conosco e solicite um orçamento sem compromisso. Nossa equipe de atendimento está pronta para esclarecer todas as suas dúvidas e oferecer a melhor solução para o seu caso.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-cyan-600 dark:bg-cyan-900 text-white py-16 transition-colors duration-300">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Precisa de Manutenção Hidráulica?
              </h2>
              <p className="text-xl mb-8 text-cyan-100">
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
