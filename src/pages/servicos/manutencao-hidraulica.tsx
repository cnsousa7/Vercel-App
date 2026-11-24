import Link from 'next/link';
import SEO from '../../components/SEO';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumbs from '../../components/Breadcrumbs';
import ServiceSchema from '../../components/ServiceSchema';
import FAQ from '../../components/FAQ';
import { CheckCircle, Droplet, Phone, Wrench } from 'lucide-react';
import { CustomWhatsAppCta } from '../../components/cro/WhatsAppCta';
import { PhoneCta } from '../../components/cro/PhoneCta';

const canonical = 'https://www.cnsousatec.com.br/servicos/manutencao-hidraulica';
const whatsappMessage = 'Olá! Preciso de manutenção hidráulica em Brasília ou no Entorno. O problema ou serviço é: ____. O imóvel fica em: ____. Gostaria de verificar a disponibilidade e solicitar orientação.';

const serviceRoutes = [
  {
    href: '/servicos/encanador',
    title: 'Encanador para reparos',
    description: 'Registros, torneiras, sifões, válvulas, conexões e outros reparos pontuais.',
  },
  {
    href: '/servicos/caca-vazamentos',
    title: 'Caça-vazamentos',
    description: 'Investigação de umidade, consumo anormal e suspeita de vazamento oculto.',
  },
  {
    href: '/servicos/desentupimento',
    title: 'Desentupimento',
    description: 'Avaliação de pias, ralos, vasos, caixas de gordura e redes com obstrução.',
  },
  {
    href: '/servicos/instalacao-hidraulica',
    title: 'Instalação hidráulica',
    description: 'Novos pontos, reformas, adequações de água, esgoto e tubulações.',
  },
  {
    href: '/servicos/manutencao-hidraulica-predial',
    title: 'Manutenção predial',
    description: 'Atendimento para condomínios, empresas, lojas e edifícios.',
  },
];

const serviceAreas = [
  {
    title: 'Residências',
    description: 'Orientação para vazamentos, baixa pressão, registros, torneiras, descargas e pontos de consumo.',
  },
  {
    title: 'Comércios e empresas',
    description: 'Avaliação de ocorrências hidráulicas que podem afetar o funcionamento do imóvel e a rotina da equipe.',
  },
  {
    title: 'Condomínios e edifícios',
    description: 'Solicitações para áreas comuns, reservatórios, bombas, registros e redes hidráulicas prediais.',
  },
];

export default function ManutencaoHidraulica() {
  return (
    <>
      <SEO
        title="Manutenção hidráulica em Brasília e no Entorno | CNSOUSATEC"
        description="Manutenção hidráulica para residências, comércios, empresas e condomínios em Brasília e no Entorno. Relate o problema e confirme a disponibilidade pelo WhatsApp."
        canonical={canonical}
      />
      <ServiceSchema
        name="Manutenção hidráulica em Brasília e no Entorno"
        serviceSlug="manutencao-hidraulica"
        canonicalUrl={canonical}
        description="Avaliação e manutenção de instalações hidráulicas para imóveis residenciais, comerciais e prediais em Brasília, no Distrito Federal e em Águas Lindas - GO."
        serviceType="Manutenção hidráulica"
        areaServed={['Brasília', 'Distrito Federal', 'Entorno do Distrito Federal', 'Águas Lindas - GO']}
      />

      <Header />
      <main>
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: 'Manutenção hidráulica', href: '/servicos/manutencao-hidraulica' }]} />
        </div>

        <section className="bg-gradient-to-br from-cyan-600 to-cyan-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-cyan-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                <Droplet className="w-10 h-10" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Manutenção hidráulica em Brasília e no Entorno</h1>
              <p className="text-xl text-cyan-100 mb-8">
                Avaliação de vazamentos, pressão, registros, tubulações e outros problemas hidráulicos conforme as informações do imóvel e a disponibilidade da equipe.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <CustomWhatsAppCta message={whatsappMessage} service="manutencao-hidraulica" placement="hydraulic_hub_hero">
                  Falar sobre meu problema hidráulico
                </CustomWhatsAppCta>
                <PhoneCta
                  service="manutencao-hidraulica"
                  placement="hydraulic_hub_hero"
                  className="inline-flex items-center rounded-lg border-2 border-white px-5 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                  Ligar para orientação
                </PhoneCta>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl font-bold mb-5 text-gray-900 dark:text-white">Qual problema hidráulico você precisa avaliar?</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                A manutenção começa pela compreensão do sintoma. Informe a região, o tipo de imóvel, o ambiente afetado e quando o problema começou. Com essas informações, a equipe pode orientar o próximo passo e confirmar se há disponibilidade para uma avaliação.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5 mb-16">
              {[
                'Vazamento aparente, manchas ou sinais de infiltração',
                'Baixa pressão, falta de água ou retorno de água',
                'Registro, torneira, sifão, descarga ou válvula com defeito',
                'Tubulação, conexões ou pontos de consumo para reparar',
                'Entupimento em pia, ralo, vaso sanitário ou caixa de gordura',
                'Adequação hidráulica durante reforma ou mudança de ambiente',
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-lg border border-gray-200 dark:border-gray-700 p-5">
                  <CheckCircle className="w-6 h-6 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-1" aria-hidden="true" />
                  <p className="text-lg text-gray-700 dark:text-gray-300">{item}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Escolha o atendimento mais próximo do seu problema</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Use o serviço específico quando já souber o tipo de ocorrência. Isso ajuda a enviar informações mais objetivas no primeiro contato.
            </p>
            <div className="grid md:grid-cols-2 gap-5 mb-16">
              {serviceRoutes.map((route) => (
                <Link key={route.href} href={route.href} className="rounded-xl border border-cyan-100 dark:border-gray-700 bg-cyan-50 dark:bg-gray-800 p-6 hover:border-cyan-400 transition-colors">
                  <h3 className="text-xl font-bold mb-2 text-cyan-800 dark:text-cyan-200">{route.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{route.description}</p>
                </Link>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Atendimento conforme o tipo de imóvel</h2>
            <div className="grid md:grid-cols-3 gap-5 mb-16">
              {serviceAreas.map((area) => (
                <div key={area.title} className="rounded-xl bg-gray-50 dark:bg-gray-800 p-6">
                  <Wrench className="w-9 h-9 text-cyan-600 dark:text-cyan-400 mb-4" aria-hidden="true" />
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{area.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{area.description}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-cyan-50 dark:bg-gray-800 border border-cyan-100 dark:border-gray-700 p-6 md:p-8 mb-16">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Como preparar o contato</h2>
              <ul className="list-disc pl-5 space-y-3 text-gray-700 dark:text-gray-300">
                <li>Informe a cidade, bairro ou região e o tipo de imóvel.</li>
                <li>Descreva o sintoma: vazamento, entupimento, pressão, registro, tubulação ou instalação.</li>
                <li>Se for seguro, envie foto ou vídeo do ponto afetado; não desmonte instalações pressurizadas.</li>
                <li>Em ocorrências próximas a eletricidade e água, priorize a segurança e informe a situação à equipe.</li>
              </ul>
              <div className="mt-6">
                <CustomWhatsAppCta message={whatsappMessage} service="manutencao-hidraulica" placement="hydraulic_hub_guidance">
                  Enviar detalhes pelo WhatsApp
                </CustomWhatsAppCta>
              </div>
            </div>

            <FAQ
              title="Dúvidas sobre manutenção hidráulica"
              items={[
                {
                  question: 'A manutenção hidráulica atende quais problemas?',
                  answer: 'A solicitação pode envolver vazamentos, baixa pressão, registros, torneiras, descargas, tubulações, conexões, entupimentos e adequações. O escopo depende das informações do chamado e da avaliação necessária.',
                },
                {
                  question: 'Qual a diferença entre manutenção e caça-vazamentos?',
                  answer: 'A caça-vazamentos concentra-se em investigar a origem de sinais como umidade ou consumo anormal. A manutenção hidráulica é mais ampla e pode incluir reparos, substituição de componentes e adequações.',
                },
                {
                  question: 'Atendem condomínios e empresas?',
                  answer: 'Sim, a solicitação pode ser avaliada para condomínios, empresas, lojas e outros imóveis. Informe o tipo de imóvel, a área afetada e a urgência para confirmar a disponibilidade.',
                },
                {
                  question: 'O que preciso enviar para solicitar orientação?',
                  answer: 'Envie a região, o tipo de imóvel, o problema observado e, quando for seguro, fotos ou vídeos. O orçamento e o prazo dependem do diagnóstico e das condições do atendimento.',
                },
              ]}
            />
          </div>
        </section>

        <section className="bg-cyan-700 text-white py-16">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Precisa avaliar um problema hidráulico?</h2>
            <p className="text-xl mb-8 text-cyan-100">Envie a região e os detalhes do imóvel para verificar a disponibilidade do atendimento.</p>
            <CustomWhatsAppCta message={whatsappMessage} service="manutencao-hidraulica" placement="hydraulic_hub_bottom">
              Solicitar orientação hidráulica
            </CustomWhatsAppCta>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
