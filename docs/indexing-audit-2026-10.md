# Auditoria de indexação da CNSOUSATEC

**Data:** 7 de outubro de 2026  
**Projeto:** `cnsousa7/Vercel-App`  
**Domínio analisado:** `https://www.cnsousatec.com.br`  
**Autor:** Manus AI

## Conclusão

O problema principal não era um bloqueio global de rastreamento. O projeto gera corretamente as páginas locais como HTML estático e não foi encontrado `noindex` aplicado às páginas indexáveis. O padrão informado no Search Console — **49 páginas indexadas e 538 não indexadas** — é compatível com a publicação de muitas páginas locais programáticas com estrutura e texto muito semelhantes.

O Google pode rastrear uma URL sem escolhê-la para o índice. Sitemap, canonical e diretiva `index` ajudam o rastreamento, mas não obrigam a indexação. A causa de qualidade precisa ser tratada com conteúdo realmente útil e específico por localidade; não é seguro tentar resolver o problema apenas adicionando mais metatags ou elevando prioridades do sitemap.

## Evidências encontradas

### Arquitetura e geração

- O projeto ativo é o Next.js em `cnsousa7/Vercel-App`, não o repositório legado em Vite/React.
- A rota `src/pages/local/[slug].tsx` usa `getStaticPaths` com `fallback: false` e gera **3 serviços × 186 localidades = 558 páginas locais**.
- Com home, 404, três páginas de serviço e a rota local, o build informou **564 páginas geradas**.
- A resolução de slugs inválidos retorna `notFound: true`; não foi identificado loop de canonical nessa rota.
- O sitemap continha **562 URLs**: home, três páginas de serviço e 558 páginas locais.

### Conteúdo

A comparação de amostras mostrou o mesmo template, os mesmos blocos de conversão e as mesmas perguntas frequentes, alterando principalmente nome, UF e foco da localidade. Isso produz diferenciação semântica limitada para centenas de URLs. Também foram encontrados depoimentos com nomes, funções e avaliações que não estavam documentados como fontes reais.

Esse padrão é especialmente importante porque a política do Google define como conteúdo escalado abusivo a criação de muitas páginas com conteúdo original insuficiente e pouco valor adicional para o usuário [2]. Isso não prova uma penalização manual, mas explica por que páginas rastreadas podem permanecer fora do índice.

### Sitemap

O gerador colocava `lastmod` com o horário atual em todas as URLs a cada execução, além de `priority` e `changefreq`. O Google informa que ignora `priority` e `changefreq` e só usa `lastmod` quando a data é consistente e verificável [1]. Atualizar todas as datas sem uma mudança real pode reduzir a confiabilidade do sitemap.

## Correções aplicadas

1. **Diretiva robots explícita.** `src/components/SEO.tsx` agora publica `index,follow` e limites de prévia para páginas normais. Páginas que recebem `noindex` continuam com `noindex,nofollow`.
2. **Sitemap mais confiável.** `scripts/generate-sitemap.js` continua listando apenas as URLs canônicas válidas, mas deixa de emitir `lastmod`, `priority` e `changefreq` artificiais. O sitemap regenerado contém 562 URLs e não contém esses campos.
3. **Autenticidade do conteúdo.** As páginas locais deixaram de afirmar certificações NR-10/CREA, prazos de 30–60 minutos, garantia universal, avaliação gratuita e disponibilidade 24 horas quando essas informações não estavam comprovadas no código ou em documentação fornecida.
4. **Depoimentos removidos.** O componente de depoimentos não verificáveis foi removido da home e das páginas locais. Isso evita publicar avaliações atribuídas a pessoas identificadas sem fonte.
5. **FAQ mais factual.** As respostas agora orientam o usuário a confirmar disponibilidade, prazo, escopo e condições durante o contato, em vez de prometer resultados uniformes para todas as localidades.

## Validação

- `npm ci`: concluído.
- `npm run lint`: concluído sem erros.
- `npm run build`: concluído sem erros.
- TypeScript: concluído.
- Geração estática: concluída para **564/564 páginas**.
- Sitemap final: **562 URLs**, sem `lastmod`, `priority` ou `changefreq` artificiais.

## O que ainda precisa ser feito no Search Console

A correção de código não garante que as 538 URLs passem a ser indexadas. Depois do deploy, é necessário:

1. Enviar novamente `https://www.cnsousatec.com.br/sitemap.xml` no Search Console.
2. Inspecionar amostras de cada serviço e de cada UF.
3. Confirmar que a URL canônica exibida pelo Google é a própria URL local.
4. Solicitar nova indexação apenas de páginas que tenham conteúdo local realmente útil.
5. Acompanhar as quatro categorias de exclusão no relatório de indexação.

Se as páginas continuarem como “Rastreada, mas não indexada”, a próxima decisão deve ser editorial: manter no sitemap somente localidades com demanda, informações próprias e capacidade real de atendimento, ou fundir páginas muito semelhantes em páginas de serviço mais fortes. Não recomendo usar `noindex` em massa sem essa decisão, porque isso apenas esconde o problema e pode retirar páginas úteis do índice.

## Limitações

Não houve acesso direto à propriedade do Search Console nesta execução. Portanto, não foi possível confirmar as quatro categorias exatas de exclusão, inspeções de URL, ações manuais ou sinais de canonical escolhida pelo Google. A causa de conteúdo semelhante é uma hipótese técnica forte baseada no código, no número de URLs e nas amostras comparadas, mas deve ser confirmada com a inspeção de URL do Search Console após o deploy.

## Referências

[1]: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap "Google Search Central: Build and submit a sitemap"
[2]: https://developers.google.com/search/docs/essentials/spam-policies "Google Search Central: Spam policies for Google Web Search"
