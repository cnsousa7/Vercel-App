import HydraulicServiceLanding from '../../components/HydraulicServiceLanding';

export default function CacaVazamentosPage() {
  return (
    <HydraulicServiceLanding
      title="Caça-Vazamentos em Brasília | Avaliação de Vazamentos | CNSOUSATEC"
      description="Serviço de caça-vazamentos em Brasília e no Entorno para investigar sinais de umidade, consumo anormal e vazamentos ocultos. Envie os detalhes pelo WhatsApp."
      canonical="https://www.cnsousatec.com.br/servicos/caca-vazamentos"
      heading="Caça-vazamentos em Brasília e no Entorno"
      intro="Investigação de sinais de vazamento em imóveis residenciais, comerciais e condomínios, com avaliação conforme o caso informado."
      services={[
        'Investigação de manchas, umidade e infiltrações relacionadas à hidráulica',
        'Avaliação de consumo de água acima do esperado',
        'Verificação de vazamentos aparentes e suspeitos',
        'Análise de tubulações, registros e pontos de consumo',
        'Orientação para registrar fotos e informações do local',
        'Encaminhamento para reparo quando o serviço for confirmado',
      ]}
      guidanceTitle="Como preparar a solicitação"
      guidance={[
        'Antes de solicitar a avaliação, observe onde apareceram manchas, se o hidrômetro continua registrando consumo com os pontos fechados e se há alteração de pressão. Essas informações ajudam a equipe a entender o cenário inicial.',
        'Envie a região e uma descrição objetiva do problema pelo WhatsApp. Fotos podem ajudar na triagem, mas não substituem a avaliação do local quando ela for necessária.',
      ]}
      whatsappMessage="Olá! Preciso investigar um possível vazamento em Brasília ou no Entorno. A região é: ____. Notei: ____. Gostaria de verificar a disponibilidade de uma avaliação."
      serviceKey="caca-vazamentos"
      faqs={[
        { question: 'Quais sinais podem indicar um vazamento?', answer: 'Manchas de umidade, consumo anormal, cheiro de mofo, ruídos nas tubulações e queda de pressão são sinais que merecem avaliação.' },
        { question: 'Preciso quebrar a parede antes de chamar?', answer: 'Não. Envie os sinais observados e a região. A equipe orientará os próximos passos e confirmará quando uma avaliação no local for necessária.' },
      ]}
    />
  );
}
