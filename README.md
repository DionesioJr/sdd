# Desenvolvimento de Software com IA

Curso prático de desenvolvimento orientado a especificação (Spec-Driven Development) com Inteligência Artificial, do iniciante ao tech lead. O aluno aprende o método e a organizar specs, design e tarefas, de projetos pequenos a projetos grandes, para que a IA desenvolva de forma organizada e automatizada. O curso termina numa fábrica de software com agentes no Runtable.

## Organização

```
Modulo-XX-nome/
  Aula-XX-nome/
    01-slide.md
    02-slide.md
```

- **Módulo**: uma pasta por grande tema.
- **Aula**: uma subpasta dentro do módulo.
- **Slide**: um arquivo Markdown por slide.
- **Vários slides num arquivo**: separe com uma linha contendo só `---`.

### Sequência de cada aula

Todas as aulas dos módulos 02 a 21 seguem a mesma linha de raciocínio: **capa** (o que você vai saber) → **sem isso** (o que acontece se você não souber) → **conceito** → **o ganho real** (tabela sem/com) → **exercícios** → **resumo** (o ganho e por que a próxima aula vem agora). Todo módulo termina com um slide `fechamento-do-modulo` e abre com um README que explica por que ele existe.

### Recursos de layout no Markdown

O visual dos slides segue o modelo de aula do professor (1280 × 720, fundo claro, destaques em laranja).

- `01-capa.md` vira capa: `**texto**` sozinho numa linha vira a etiqueta acima do título, e o resto vai para um cartão à direita.
- `# Exercício 2: Título` ou `# Limite 1: Título` vira etiqueta laranja ("EXERCÍCIO 2") e título. O mesmo vale para `## Tema · Título`. Sem isso, a etiqueta é o tema da aula.
- `*texto em itálico*` sozinho logo após o título vira subtítulo.
- `Rótulo: A → B → C` (duas setas ou mais) vira um fluxo de caixas; a última fica em destaque.
- `**Rótulo**: texto` vira um destaque em fundo claro (ex.: Objetivo, Discussão).
- Lista numerada (`1.`) ganha números em círculo; vários `###` seguidos viram cartões (`### 1. Nome` mostra "01").
- Bloco de código vira janela de terminal; use a linguagem na cerca (` ```ts `).
- Slide com só um título (e no máximo uma linha) dentro de um arquivo com vários slides vira divisória escura com número grande.
- Arquivos `*fechamento*` usam fundo escuro.
- Para forçar um layout, use uma anotação: `<!-- layout: capa -->`, `<!-- layout: secao -->` ou `<!-- layout: escuro -->`.
- O texto encolhe sozinho para caber, até 24px. Se um slide ainda rolar, divida com `---`.
- O nome do professor (capa e rodapé) fica na constante `AUTOR` no início do script de `leitor.html`.

## Ver os slides

1. Rode `node gerar-conteudo.mjs` (Node 20.11 ou mais novo). Ele junta todos os `.md` em `conteudo.js`.
2. Abra `leitor.html` no navegador. `F5` apresenta, `/` busca.

Rode de novo sempre que editar os `.md`. O `conteudo.js` não vai para o Git.

**Deploy na Vercel**: o `vercel.json` já roda `node gerar-conteudo.mjs --dist` e publica a pasta `dist/`, com o leitor como página inicial.

**O mapa do curso** lê três fontes: a árvore do `EAP.md` (níveis), as tabelas do `JORNADA.md` (problema de cada módulo) e a tabela "Aulas" de cada `README.md` de módulo (pergunta de cada aula). Mantenha esses formatos ao editar.

## Arquivos de referência

- [A linha de raciocínio do curso](JORNADA.md): por que cada módulo existe, o que acontece sem ele e o ganho real.
- [EAP do curso](EAP.md): árvore completa de módulos e aulas.
- [Desenvolvimento orientado a SPEC](Desenvolvimento%20orientado%20a%20SPEC.md): base do conteúdo.
