## Resumo

Atualiza o projeto Next.js que serve o domínio CNSOUSATEC na Vercel, com melhorias de SEO, acessibilidade e carregamento de imagens. Esta branch corresponde ao repositório correto `cnsousa7/Vercel-App`.

## Alterações

- Mantidos os títulos, descriptions, canonical, Open Graph e FAQ Schema implementados nesta branch.
- Adicionados `aria-expanded`, `aria-controls`, `aria-haspopup` e rótulos explícitos ao menu desktop/mobile.
- Adicionados IDs, `role="region"`, `aria-labelledby` e estados `aria-expanded` aos accordions de FAQ.
- Substituídas imagens HTML por `next/image` na seção de serviços, com `fill` e `sizes` responsivos.
- Criados ativos WebP em `public/optimized/`, mantendo todos os originais como fallback e fonte para uso social/schema.
- Logo do cabeçalho e rodapé e imagens dos serviços passaram a usar os ativos WebP; a Vercel continua responsável pela entrega AVIF/WebP responsiva do Next Image.
- Removidos imports não utilizados que apareciam no lint.

## Validação

- `npm run lint`: passou, com 1 aviso preexistente sobre o script inline de Google Tag Manager em `src/pages/_document.tsx`.
- `npm run build`: passou.
- Next.js gerou 564 páginas estáticas, incluindo a home, três páginas de serviço e 559 páginas locais.
- Sitemap gerado com 562 URLs.
- Imagens convertidas: 7 arquivos; redução agregada determinística dos arquivos convertidos: 83,94%.

## Limitações e pendências

- PageSpeed Insights, Lighthouse, Core Web Vitals, Google Rich Results Test e Schema.org Validator não foram executados com métricas verificáveis nesta atualização.
- A quota da API PageSpeed disponível nesta sessão respondeu HTTP 429; portanto, não são declaradas pontuações.
- O domínio oficial foi confirmado como servido pela Vercel. Não foram alterados DNS, domínio ou configurações externas.
- O merge em `master` não é feito automaticamente; o PR está pronto para revisão.
