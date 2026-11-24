# Módulo 21: Guia prático dos arquivos do SDD

Objetivo: saber **quais arquivos** um projeto SDD tem, **o que vai em cada um** e **em que momento** cada um é criado, lido ou alterado: num MVP do zero, numa nova feature e na sustentação (bugs e ajustes).

## Por que este módulo existe

Os módulos anteriores ensinam cada documento no seu momento. Na vida real, o aluno enfrenta a pergunta inversa: *"chegou este pedido: qual arquivo eu abro primeiro?"* Este módulo é a **folha de consulta** que responde isso, com exemplos de conteúdo reais e prompts prontos.

**Sem este módulo**: os arquivos são criados no começo e esquecidos. O bug é corrigido no chat, a feature vai direto para o código, o `tasks.md` fica velho e a spec deixa de ser verdade em duas semanas.

**Ganho real**: para cada situação (MVP, feature, bug, ajuste), você sabe **quais arquivos criar, quais atualizar e em que ordem**, e a spec continua sendo a fonte da verdade.

## Quando usar

- **Como visão geral**: logo depois do Módulo 04, para enxergar o conjunto antes de aprofundar.
- **Como consulta**: a qualquer momento, quando chegar um pedido novo.
- Para aprofundar cada arquivo: Módulos 05 a 08 (criar), 09 (escalar), 10 (ADRs), 11 (`AGENTS.md`) e 14 (estratégias).

## Aulas

| Aula | Pergunta que responde |
|---|---|
| [01 Os arquivos do SDD na prática](Aula-01-Os-arquivos-do-SDD-na-pratica/) | Qual arquivo uso em cada etapa: MVP do zero, nova feature e sustentação? |

## Preparação

- Ter visto o ciclo do SDD (Módulo 04).
- Um agente funcionando (Módulo 02) e um repositório Git.

## Entregável do módulo

Um projeto novo com `AGENTS.md`, `docs/requirements.md`, `docs/design.md`, `docs/tasks.md`, um ADR e um Taskfile, mais uma feature e um bug registrados nesses mesmos arquivos, com o histórico do Git mostrando a spec mudando **antes** do código.
