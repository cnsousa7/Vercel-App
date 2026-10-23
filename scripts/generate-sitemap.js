/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

const baseUrl = 'https://www.cnsousatec.com.br';

function getLocalidadesFromTS() {
  const tsPath = path.join(__dirname, '../src/lib/localidades.ts');
  const content = fs.readFileSync(tsPath, 'utf8');
  const slugRegex = /slug:\s*'([^']+)'/g;
  const slugs = [];
  let match;

  while ((match = slugRegex.exec(content)) !== null) {
    slugs.push(match[1]);
  }

  return [...new Set(slugs)];
}

const servicos = [
  'manutencao-eletrica',
  'manutencao-eletronica',
  'manutencao-hidraulica',
];
const localidades = getLocalidadesFromTS();

if (localidades.length === 0) {
  console.error('❌ Erro: Nenhuma localidade encontrada no arquivo localidades.ts');
  process.exit(1);
}

const staticUrls = [
  '',
  '/servicos/manutencao-eletrica',
  '/servicos/manutencao-eletronica',
  '/servicos/manutencao-hidraulica',
  '/servicos/encanador',
  '/servicos/caca-vazamentos',
  '/servicos/desentupimento',
];

const localUrls = servicos.flatMap((servico) =>
  localidades.map((localidade) => `/local/${servico}-${localidade}`),
);
const allUrls = [...new Set([...staticUrls, ...localUrls])];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map((url) => `  <url>\n    <loc>${baseUrl}${url}</loc>\n  </url>`).join('\n')}
</urlset>
`;

const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
console.log(`✅ Sitemap canônico gerado em public/sitemap.xml (${allUrls.length} URLs)`);
console.log(`📍 Total de localidades processadas: ${localidades.length}`);
