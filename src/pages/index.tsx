import { motion } from 'framer-motion';
import { CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import { UrgentMaintenanceCta, ExpressQuoteCta, MedicalEngineeringCta } from '../components/cro/WhatsAppCta';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import ServicesSection from '../components/ServicesSection';
import SchemaLocalBusiness from '../components/SchemaLocalBusiness';
import SEO from '../components/SEO';
import FAQ from '../components/FAQ';

const conversionFaq = [
  {
    question: 'A CNSOUSATEC atende emergências 24 horas?',
    answer: 'Sim. A CNSOUSATEC atende emergências elétricas e hidráulicas 24 horas em Brasília, no Distrito Federal e no Entorno, com triagem rápida pelo WhatsApp e encaminhamento para a equipe técnica.',
  },
  {
    question: 'Fazem manutenção em equipamentos médico-hospitalares?',
    answer: 'Sim. Nossa equipe oferece suporte técnico especializado em engenharia clínica e manutenção de equipamentos médico-hospitalares, com atendimento para empresas, clínicas e hospitais.',
  },
  {
    question: 'Vocês atendem em quais regiões?',
    answer: 'Atendemos Brasília e as regiões administrativas do Distrito Federal, além do Entorno, incluindo Águas Lindas de Goiás. Consulte a equipe para confirmar a disponibilidade na sua localidade.',
  },
];

const fastTransition = { duration: 0.3, ease: "easeOut" as const };

export default function Home() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Emergência Elétrica e Hidráulica 24h no DF | Atendimento Rápido | CNSOUSATEC"
        description="CNSOUSATEC: manutenção elétrica, hidráulica, eletrônica e engenharia clínica 24h em Brasília, DF e Entorno. Especialistas e orçamento expresso. Ligue agora."
        canonical="https://www.cnsousatec.com.br"
        faqItems={conversionFaq}
      />

      <SchemaLocalBusiness />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="cns-hero relative bg-blue-600 dark:bg-blue-900 overflow-hidden transition-colors duration-300">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={fastTransition}
              className="cns-hero__content mx-auto text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Manutenção Profissional para seu Negócio
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-blue-100 dark:text-blue-200">
                Especialistas em elétrica, eletrônica, hidráulica e engenharia clínica no Distrito Federal
              </p>
              <div className="cns-hero__cta-row justify-center">
                <UrgentMaintenanceCta />
                <ExpressQuoteCta />
                <MedicalEngineeringCta />
              </div>
            </motion.div>
          </div>
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          </div>
        </section>

        <ServicesSection uf="DF" />

        {/* Why Choose Us */}
        <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Por que escolher a Cnsousatec?</h2>
                <div className="space-y-4">
                  {[
                    "Equipe técnica altamente qualificada",
                    "Atendimento rápido e personalizado",
                    "Garantia em todos os serviços prestados",
                    "Equipamentos de última geração",
                    "Preços competitivos e transparência"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2 bg-blue-50 dark:bg-gray-800 p-8 rounded-2xl border border-blue-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold mb-4 text-blue-900 dark:text-blue-100">Solicite uma Visita Técnica</h3>
                <p className="text-blue-800 dark:text-blue-200 mb-6">
                  Nossos especialistas estão prontos para avaliar sua necessidade e propor a melhor solução.
                </p>
                <UrgentMaintenanceCta className="w-full" />
              </div>
            </div>
          </div>
        </section>

        <Testimonials uf="DF" />

        <FAQ items={conversionFaq} includeSchema={false} />

        {/* Contact Section */}
        <section id="contato" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800/50 transition-colors duration-300 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent mb-6">Vamos Conversar?</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Estamos aqui para transformar suas ideias em soluções reais</p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Contact Info Card */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-[40px] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-[40px] p-10 md:p-12 border border-white/20 dark:border-gray-700/20 shadow-2xl">
                  <h3 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">Entre em Contato</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-12 text-lg">Estamos prontos para atender suas necessidades com excelência e rapidez.</p>
                  
                  <div className="space-y-6">
                    {[
                      { icon: <Phone className="w-6 h-6" />, text: "(61) 99274-3428", label: "Telefone" },
                      { icon: <Mail className="w-6 h-6" />, text: "Cnsousatec@gmail.com", label: "E-mail" },
                      { icon: <MapPin className="w-6 h-6" />, text: "Brasília - DF", label: "Localização" }
                    ].map((item, i) => (
                      <motion.div 
                        key={i}
                        whileHover={{ x: 8 }}
                        className="flex items-center gap-5 group/item cursor-pointer"
                      >
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-lg group-hover/item:shadow-xl transition-all group-hover/item:scale-110">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">{item.label}</p>
                          <p className="text-lg font-semibold text-gray-900 dark:text-white">{item.text}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              {/* CTA Card */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-[40px] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-[40px] p-10 md:p-12 border border-white/20 dark:border-gray-700/20 shadow-2xl flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">Mande uma Mensagem</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-10 text-lg leading-relaxed">
                    Prefere um atendimento instantâneo? Clique no botão abaixo e fale diretamente com nossa equipe técnica pelo WhatsApp.
                  </p>
                  <ExpressQuoteCta className="w-full py-6 rounded-3xl text-xl shadow-2xl shadow-green-500/30" />
                  <p className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400">⚡ Resposta média em menos de 15 minutos</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
