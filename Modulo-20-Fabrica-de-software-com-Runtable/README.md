# Módulo 20: Fábrica de software com Runtable

Objetivo: levar o gestor de tarefas, da spec ao PR, por uma esteira de agentes no Runtable: workflow em colunas, máquina executora, execução isolada, planejamento por IA aprovado por pessoa e governança com dossiê e trilha de auditoria.

## Por que este módulo existe

No Módulo 19 você montou à mão um orquestrador mínimo e descobriu quanto há para manter: filas, worktrees, limites, aprovações, logs, auditoria e visão de custo. Isso funciona para um experimento. Para um time, **não se sustenta**.

**Sem este módulo**: scripts soltos que só uma pessoa entende, sem trilha de auditoria, sem visão de custo por tarefa e sem governança. A automação existe, mas **ninguém confia nela** para trabalho real.

**Ganho real**: uma **esteira** em que cada coluna tem um agente especialista, as tarefas seguem do plano ao PR com CI verde, as pessoas aprovam por risco e **tudo fica registrado**. É o método do curso, operando como uma fábrica.

**Aviso para quem ensina**: comandos e telas do Runtable evoluem. Antes de cada turma, **confira** os comandos e fluxos na versão em uso (`rtb --help` e a documentação do produto).

## Aulas

| Aula | Pergunta que responde |
|---|---|
| [01 A esteira](Aula-01-A-esteira/) | Como o ciclo do SDD vira um workflow com agentes por coluna? |
| [02 Máquina executora](Aula-02-Maquina-executora/) | Onde os agentes rodam e como conectá-los? |
| [03 Da tarefa ao PR](Aula-03-Da-tarefa-ao-PR/) | O que acontece com uma tarefa do início ao fim? |
| [04 Planejamento por IA](Aula-04-Planejamento-por-IA/) | Como a IA propõe o plano e a pessoa o aprova? |
| [05 Governança](Aula-05-Governanca/) | Como controlar risco, custo e provar o que foi feito? |
| [06 No projeto](Aula-06-No-projeto/) | Como o gestor evolui dentro da fábrica, da spec ao PR? |

## Preparação

- Conta no Runtable e o CLI `rtb` instalado (`rtb --version`).
- O gestor no GitHub, com Docker, pipeline e `docs/` organizado (Módulos 09 a 16).
- Os limites de custo do provedor de modelos configurados.

## Entregável do módulo

O domínio **Relatórios** do gestor, especificado por você e **entregue por uma esteira de agentes**, da spec aprovada aos PRs com CI verde, com dossiê e trilha de auditoria.
