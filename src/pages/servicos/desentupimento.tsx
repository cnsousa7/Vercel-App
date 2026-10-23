import HydraulicServiceLanding from '../../components/HydraulicServiceLanding';

export default function DesentupimentoPage() {
  return (
    <HydraulicServiceLanding
      title="Desentupimento em Brasília e Entorno | Solicite Atendimento | CNSOUSATEC"
      description="Desentupimento de pias, ralos, vasos sanitários e tubulações em Brasília e no Entorno. Informe o local e o tipo de obstrução pelo WhatsApp."
      canonical="https://www.cnsousatec.com.br/servicos/desentupimento"
      heading="Desentupimento em Brasília e no Entorno"
      intro="Atendimento para obstruções em pias, ralos, vasos sanitários e tubulações, conforme o tipo de problema e a disponibilidade da equipe."
      services={[
        'Desentupimento de pias, ralos e sifões',
        'Desentupimento de vasos sanitários e ramais',
        'Investigação de retorno de água e escoamento lento',
        'Avaliação de obstruções em tubulações e colunas',
        'Orientação inicial para reduzir o risco de danos no imóvel',
        'Verificação de manutenção preventiva quando o problema é recorrente',
      ]}
      guidanceTitle="O que informar no contato"
      guidance={[
        'Informe qual ponto está obstruído, há quanto tempo o problema começou, se outros pontos também foram afetados e se existe retorno de água. Não use produtos químicos adicionais sem orientação quando isso puder aumentar o risco para pessoas ou tubulações.',
        'Com a região e os detalhes do problema, a equipe pode avaliar a disponibilidade e orientar os próximos passos. O orçamento depende do diagnóstico e do escopo necessário.',
      ]}
      whatsappMessage="Olá! Preciso de desentupimento em Brasília ou no Entorno. O ponto afetado é: ____. A região é: ____. Gostaria de verificar a disponibilidade e solicitar orientação."
      serviceKey="desentupimento"
      faqs={[
        { question: 'Quais pontos podem ser avaliados?', answer: 'A solicitação pode envolver pias, ralos, vasos sanitários, sifões, ramais e outros pontos de escoamento, conforme o problema informado.' },
        { question: 'O que devo informar no primeiro contato?', answer: 'Informe o ponto obstruído, há quanto tempo começou, se há retorno de água e se outros pontos do imóvel também foram afetados.' },
      ]}
    />
  );
}
