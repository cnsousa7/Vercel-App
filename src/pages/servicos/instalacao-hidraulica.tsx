import HydraulicServiceLanding from '../../components/HydraulicServiceLanding';

export default function InstalacaoHidraulicaPage() {
  return (
    <HydraulicServiceLanding
      title="Instalação Hidráulica em Brasília e Entorno | CNSOUSATEC"
      description="Instalação hidráulica para reformas, ampliações e novos ambientes em Brasília e no Entorno. Envie as informações do projeto e solicite uma avaliação."
      canonical="https://www.cnsousatec.com.br/servicos/instalacao-hidraulica"
      heading="Instalação Hidráulica em Brasília e no Entorno"
      intro="Soluções para novos pontos de água, esgoto e adequações hidráulicas em residências, empresas, lojas e condomínios."
      services={[
        'Instalação e adequação de pontos de água e esgoto',
        'Ampliação ou reforma de redes hidráulicas',
        'Substituição de trechos de tubulação e conexões',
        'Instalação de registros, torneiras, sifões e válvulas',
        'Adequações hidráulicas para cozinhas, banheiros e áreas de serviço',
        'Avaliação inicial de escopo, local e disponibilidade',
      ]}
      guidanceTitle="Planeje a instalação"
      guidance={[
        'Para uma avaliação inicial, informe o endereço ou região, o tipo de imóvel, os pontos que precisam ser criados ou alterados e se a instalação faz parte de uma reforma. Fotos, medidas e uma descrição do objetivo ajudam a entender o escopo.',
        'Cada obra possui necessidades próprias. Materiais, prazo, orçamento e etapas devem ser definidos após a análise das informações e, quando necessário, uma visita técnica.',
      ]}
      whatsappMessage="Olá! Preciso de instalação ou adequação hidráulica em Brasília ou no Entorno. O imóvel é: ____. Preciso fazer: ____. A região é: ____. Gostaria de solicitar uma avaliação."
      serviceKey="instalacao-hidraulica"
      faqs={[
        { question: 'Atendem reformas e novos pontos hidráulicos?', answer: 'A solicitação pode ser avaliada para reformas, ampliações e novos pontos de água ou esgoto, conforme o escopo e a disponibilidade da equipe.' },
        { question: 'O que devo enviar para receber uma orientação inicial?', answer: 'Envie a região, tipo de imóvel, objetivo da instalação e, se possível, fotos, medidas ou uma planta do ambiente.' },
      ]}
    />
  );
}
