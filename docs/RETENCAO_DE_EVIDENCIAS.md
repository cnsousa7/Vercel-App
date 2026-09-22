# Retenção e exclusão de evidências técnicas

**Política adotada:** exclusão manual assistida  
**Escopo:** imagens técnicas enviadas opcionalmente pelo assistente virtual da CNSOUSATEC  
**Armazenamento:** Vercel Blob, pasta `chatbot-evidencias/`

> As evidências são arquivos públicos por configuração do armazenamento. Elas devem ser estritamente técnicas e nunca podem conter pacientes, documentos, rostos, dados pessoais ou informações confidenciais.

## Finalidade e prazo

A foto é utilizada exclusivamente para agilizar a triagem técnica e o encaminhamento da solicitação ao WhatsApp. A equipe deve excluir a evidência assim que ela não for mais necessária ao atendimento e, como regra operacional, em até **30 dias** do envio.

| Situação | Ação | Prazo |
|---|---|---:|
| Triagem concluída e foto não é mais necessária | Excluir imediatamente. | No mesmo dia. |
| Atendimento em andamento | Manter somente enquanto a equipe técnica precisar consultar o arquivo. | Até a conclusão. |
| Solicitação sem continuidade | Excluir na revisão periódica. | Máximo de 30 dias. |
| Arquivo com dado pessoal, paciente, documento ou conteúdo inadequado | Excluir imediatamente e orientar o contato a não reenviar esse tipo de material. | Imediato. |

## Revisão manual assistida

A pessoa responsável pelo atendimento deve executar a revisão pelo menos uma vez por semana e uma revisão completa no primeiro dia útil de cada mês. Não há tarefa automática programada: o controle é feito pela equipe para manter a decisão de retenção ligada à situação real do chamado.

### Procedimento de exclusão

1. Acesse o projeto da CNSOUSATEC na Vercel e abra **Storage**.
2. Selecione a loja **Cnsousatec-chatbot-evidencias**.
3. Abra a pasta `chatbot-evidencias/` e identifique os arquivos pelo nome e data de criação.
4. Antes de excluir, confirme com a equipe de atendimento se a evidência ainda é necessária para o chamado correspondente.
5. Selecione o arquivo e confirme a exclusão no painel.
6. Registre internamente a data, o identificador do arquivo e o motivo da exclusão, sem copiar o link público para planilhas abertas ou canais não autorizados.

A exclusão não deve ser usada para remover informações que precisem ser preservadas por obrigação contratual, legal ou de segurança. Quando houver dúvida, a equipe deve interromper a exclusão e solicitar orientação do responsável administrativo.

## Checklist semanal

| Verificação | Concluído |
|---|---|
| Foram revisadas novas imagens recebidas na semana. | ☐ |
| Foram removidas imagens de chamadas concluídas ou abandonadas. | ☐ |
| Foram eliminados imediatamente arquivos com conteúdo inadequado. | ☐ |
| Não há arquivo com mais de 30 dias sem justificativa de retenção. | ☐ |
| O registro interno mínimo da exclusão foi atualizado. | ☐ |

## Referências

[1] [Vercel Blob: armazenamento público](https://vercel.com/docs/vercel-blob/public-storage)  
[2] [Vercel Blob SDK](https://vercel.com/docs/vercel-blob/using-blob-sdk)
