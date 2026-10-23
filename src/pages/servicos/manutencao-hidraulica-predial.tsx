import HydraulicServiceLanding from '../../components/HydraulicServiceLanding';

export default function ManutencaoHidraulicaPredialPage() {
  return (
    <HydraulicServiceLanding
      title="Manutenção Hidráulica Predial em Brasília | CNSOUSATEC"
      description="Manutenção hidráulica predial para empresas, condomínios e edifícios em Brasília e no Entorno. Solicite avaliação de vazamentos, pressão, registros e tubulações."
      canonical="https://www.cnsousatec.com.br/servicos/manutencao-hidraulica-predial"
      heading="Manutenção Hidráulica Predial em Brasília"
      intro="Avaliação de problemas e necessidades de manutenção em redes hidráulicas de empresas, condomínios e edifícios."
      services={[
        'Inspeção de vazamentos, registros e pontos de consumo',
        'Avaliação de baixa pressão, retorno de água e falhas de abastecimento',
        'Manutenção de tubulações, conexões e componentes hidráulicos',
        'Verificação de caixas d’água, bombas e sistemas de recalque',
        'Adequações e reparos em áreas comuns e unidades',
        'Orientação para manutenção preventiva conforme a necessidade do imóvel',
      ]}
      guidanceTitle="Solicite uma avaliação predial"
      guidance={[
        'Informe o tipo de imóvel, a região, o problema observado, a quantidade de pontos afetados e se existe uma urgência operacional. Para condomínios e empresas, também é útil indicar o responsável pelo acompanhamento do atendimento.',
        'A equipe poderá analisar as informações iniciais e confirmar a disponibilidade. Escopo, materiais, prazo e orçamento devem ser definidos conforme as condições encontradas no imóvel.',
      ]}
      whatsappMessage="Olá! Preciso de manutenção hidráulica predial em Brasília ou no Entorno. O imóvel é: ____. O problema é: ____. A região é: ____. Gostaria de verificar a disponibilidade de uma avaliação."
      serviceKey="manutencao-hidraulica-predial"
      faqs={[
        { question: 'Atendem empresas e condomínios?', answer: 'A página é direcionada a solicitações de empresas, condomínios e edifícios. A equipe deve confirmar a disponibilidade e o escopo para cada imóvel.' },
        { question: 'É possível solicitar manutenção preventiva?', answer: 'Sim. Informe o tipo de imóvel, os sistemas envolvidos e a frequência desejada para que a necessidade possa ser avaliada.' },
      ]}
    />
  );
}
