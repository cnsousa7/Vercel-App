import { motion } from 'framer-motion';
import { Zap, Shield, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ServicesSectionProps {
  uf?: 'DF' | 'GO';
}

export default function ServicesSection({ uf = 'DF' }: ServicesSectionProps) {
  const isDF = uf === 'DF';

  const services = [
    {
      title: "Manutenção Elétrica",
      desc: isDF 
        ? "Instalações de alto padrão, projetos luminotécnicos e manutenção preventiva rigorosa para residências e empresas."
        : "Reparos rápidos, instalações seguras e manutenção elétrica essencial com o melhor custo da região.",
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      link: "/servicos/manutencao-eletrica",
      image: "/optimized/images/eletrica.webp"
    },
    {
      title: "Manutenção Hidráulica",
      desc: isDF
        ? "Sistemas hidráulicos complexos, detecção de vazamentos por ultrassom e instalações prediais de alta performance."
        : "Consertos de vazamentos, limpeza de caixas d'água e manutenção hidráulica residencial ágil e acessível.",
      icon: <Clock className="w-8 h-8 text-cyan-600" />,
      link: "/servicos/manutencao-hidraulica",
      image: "/optimized/images/hidraulica.webp"
    },
    {
      title: "Manutenção Eletrônica",
      desc: isDF
        ? "Automação residencial, sistemas de segurança avançados e reparo de equipamentos eletrônicos de precisão."
        : "Reparo de portões eletrônicos, câmeras de segurança e manutenção de equipamentos eletrônicos do dia a dia.",
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      link: "/servicos/manutencao-eletronica",
      image: "/optimized/images/eletronica.webp"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Nossos Serviços</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            {isDF 
              ? "Soluções premium e suporte técnico especializado para quem exige o máximo em qualidade e segurança."
              : "Serviços essenciais com agilidade e economia para garantir o funcionamento do seu imóvel ou negócio."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="cns-service-card bg-white dark:bg-gray-900 rounded-xl shadow-lg transition-all duration-200 border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 min-h-[80px]">{service.desc}</p>
                <Link href={service.link} className="cns-service-card__link text-blue-600 dark:text-blue-400 font-semibold inline-flex items-center gap-2 hover:underline">
                  Saiba mais <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
