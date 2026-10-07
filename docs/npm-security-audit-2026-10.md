# Auditoria de segurança das dependências

**Data:** 7 de outubro de 2026  
**Projeto:** `cnsousa7/Vercel-App`  
**Autor:** Manus AI

## Resultado

O `npm audit` inicial reportou **21 vulnerabilidades**: 1 baixa, 3 moderadas, 16 altas e 1 crítica.

Após as atualizações, overrides controlados e uma instalação limpa:

- `npm audit --omit=dev`: **0 vulnerabilidades**;
- `npm audit` completo: **6 vulnerabilidades altas**;
- as 6 restantes pertencem ao conjunto de desenvolvimento do ESLint/Next;
- nenhuma dependência de produção/runtime permanece reportada pelo audit;
- não foi usado `npm audit fix --force` nem downgrade de `eslint-config-next`.

## Alterações aplicadas

- Next atualizado para `16.4.0`.
- `eslint-config-next` atualizado para `16.4.0`.
- ESLint atualizado para `9.39.5`.
- `@vercel/blob` atualizado para `2.8.1`.
- Tailwind/PostCSS atualizados para `4.3.3`.
- Overrides controlados no `package.json` para corrigir versões transitivas de `@humanfs/node`, `flatted`, `source-map-js`, `undici`, `brace-expansion` e `picomatch`.

## Por que não foram eliminadas as 6 restantes

O npm oferece como correção automática para a cadeia `@next/eslint-plugin-next` trocar `eslint-config-next` por `14.2.35`. Isso seria um downgrade incompatível com o Next 16 e poderia remover regras ou suporte da versão atual. As vulnerabilidades restantes estão em pacotes usados por lint e análise de padrões, não no bundle enviado como dependência de runtime da aplicação.

O caminho correto é atualizar o `eslint-config-next` quando uma versão compatível do Next publicar a cadeia corrigida. Não é recomendado forçar um override de `braces`, `micromatch` ou `fast-glob` para uma versão incompatível com os requisitos dos plugins.

## Validação

Foi executado em instalação limpa:

- `rm -rf node_modules && npm ci`: concluído;
- `npm audit --omit=dev --audit-level=moderate`: 0 vulnerabilidades;
- `npm run lint`: aprovado;
- `npm run build`: aprovado;
- geração estática: 564/564 páginas.

## Operação recomendada

O CI deve executar ambos os comandos para manter a distinção clara:

```bash
npm audit --omit=dev --audit-level=high
npm audit --audit-level=high
```

O primeiro bloqueia vulnerabilidades que chegam ao runtime. O segundo acompanha a cadeia de ferramentas e deve ser revisado quando houver uma atualização compatível de `eslint-config-next`.
