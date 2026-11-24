# Módulo 15: Qualidade e segurança

Objetivo: revisar o código gerado com método, conhecer os riscos que a IA introduz, proteger o próprio agente e transformar segurança, desempenho e acessibilidade em critérios verificáveis da spec.

## Por que este módulo existe

Com spec, contexto e testes, o agente entrega rápido e com mais acerto. Mas **rápido também significa mais código para revisar**, e a IA reproduz padrões inseguros, inventa dependências e age com as permissões que você der a ela. Segurança que depende de "lembrar" não se sustenta.

**Sem este módulo**: vulnerabilidades, segredos vazados e pacotes falsos chegam à produção. Ou o próprio agente, com permissões demais, faz um estrago que nenhum teste previu.

**Ganho real**: revisão sistemática, riscos conhecidos e **controlados**, um agente com permissões mínimas e requisitos não funcionais tão verificáveis quanto os funcionais.

## Aulas

| Aula | Pergunta que responde |
|---|---|
| [01 Revisão de código gerado](Aula-01-Revisao-de-codigo-gerado/) | Como revisar o que a IA escreve, e como usá-la como segunda revisora? |
| [02 Riscos do código gerado](Aula-02-Riscos-do-codigo-gerado/) | Que falhas a IA introduz com mais frequência? |
| [03 Segurança do agente](Aula-03-Seguranca-do-agente/) | Como impedir que o próprio agente cause dano ou seja manipulado? |
| [04 Requisitos não funcionais na spec](Aula-04-Requisitos-nao-funcionais-na-spec/) | Como tornar segurança, desempenho e acessibilidade verificáveis? |

## Preparação

- O gestor com Docker, testes e matriz de rastreabilidade (Módulos 12 e 13).

## Entregável do módulo

Um checklist de revisão do projeto, uma revisão de segurança do gestor com correções, o agente rodando com permissões mínimas e requisitos não funcionais de segurança, desempenho e acessibilidade com testes.
