// Gera conteudo.js com todos os .md do curso, para o leitor.html abrir sem servidor de arquivos.
//   node gerar-conteudo.mjs          -> conteudo.js na raiz (uso local)
//   node gerar-conteudo.mjs --dist   -> dist/index.html + dist/conteudo.js (deploy na Vercel)
import { readdirSync, readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const root = import.meta.dirname;
const SKIP = new Set(['node_modules', '.git', '.claude', '.vercel', 'dist']);
const collator = new Intl.Collator('pt-BR', { numeric: true, sensitivity: 'base' });

function walk(dir, out = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(e.name)) continue;
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.toLowerCase().endsWith('.md')) out.push(p);
  }
  return out;
}

const map = {};
for (const p of walk(root).map(p => relative(root, p).split(sep).join('/')).sort(collator.compare))
  map[p] = readFileSync(join(root, p), 'utf8');

const js = `window.CONTEUDO = ${JSON.stringify(map)};\n`;
if (process.argv.includes('--dist')) {
  const dist = join(root, 'dist');
  mkdirSync(dist, { recursive: true });
  writeFileSync(join(dist, 'conteudo.js'), js);
  copyFileSync(join(root, 'leitor.html'), join(dist, 'index.html'));
  console.log(`dist/ gerado com ${Object.keys(map).length} arquivos.`);
} else {
  writeFileSync(join(root, 'conteudo.js'), js);
  console.log(`conteudo.js gerado com ${Object.keys(map).length} arquivos.`);
}
