import HydraulicServiceLanding from '../../components/HydraulicServiceLanding';

export default function EncanadorPage() {
  return (
    <HydraulicServiceLanding
      title="Encanador em Brasília e Entorno | Orçamento pelo WhatsApp | CNSOUSATEC"
      description="Encanador em Brasília e no Entorno para vazamentos, registros, torneiras e reparos hidráulicos. Descreva o problema e solicite atendimento pelo WhatsApp."
      canonical="https://www.cnsousatec.com.br/servicos/encanador"
      heading="Encanador em Brasília e no Entorno"
      intro="Orientação e atendimento para reparos hidráulicos em residências, empresas e condomínios, conforme a disponibilidade da equipe."
      services={[
        'Investigação de vazamentos aparentes e sinais de umidade',
        'Troca ou reparo de registros, torneiras, sifões e conexões',
        'Avaliação de baixa pressão, retorno de água e falhas de abastecimento',
        'Reparos e adequações em tubulações e instalações hidráulicas',
        'Manutenção hidráulica para imóveis residenciais, comerciais e condomínios',
        'Orientação inicial pelo WhatsApp antes do agendamento',
      ]}
      guidanceTitle="Quando procurar um encanador"
      guidance={[
        'Um vazamento, mau cheiro, queda de pressão ou registro com defeito pode exigir uma avaliação antes que o problema cause mais danos. Ao entrar em contato, informe a região, o ambiente afetado e os sinais observados.',
        'O atendimento pode envolver diagnóstico, orientação sobre o próximo passo e orçamento conforme o tipo de serviço. A disponibilidade e o escopo devem ser confirmados diretamente com a equipe para cada solicitação.',
      ]}
      whatsappMessage="Olá! Preciso de um encanador em Brasília ou no Entorno. Meu problema é: ____. A região é: ____. Gostaria de verificar a disponibilidade e solicitar um orçamento."
    />
  );
}
