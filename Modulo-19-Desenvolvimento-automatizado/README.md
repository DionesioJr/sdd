# Módulo 19: Desenvolvimento automatizado

Objetivo: transformar specs e tarefas na entrada de um fluxo automático: agentes especialistas por etapa, execução em paralelo em worktrees isoladas, humano no circuito onde importa e limites claros de rodadas, custo e risco.

## Por que este módulo existe

Você já tem método, processo, governança e pipeline. Mas ainda **você** é quem pega cada tarefa, abre o agente, entrega o Taskfile, acompanha e abre o PR. O ciclo está organizado, porém **você é o gargalo**: cada tarefa espera por você.

**Sem este módulo**: a produtividade para no limite da sua atenção. Ou, na tentativa de automatizar, surgem scripts frágeis, agentes sem limites e custo sem teto.

**Ganho real**: o trabalho **bem especificado** corre sozinho, em paralelo, com pessoas aprovando o que importa. E você entende, **construindo um fluxo mínimo à mão**, o que uma plataforma de orquestração precisa resolver (Módulo 20).

## Aulas

| Aula | Pergunta que responde |
|---|---|
| [01 Da spec à execução](Aula-01-Da-spec-a-execucao/) | Como as tarefas viram entrada de um fluxo automático? |
| [02 Agentes especialistas](Aula-02-Agentes-especialistas/) | Por que separar implementar, revisar e testar? |
| [03 Execução em paralelo](Aula-03-Execucao-em-paralelo/) | Como rodar várias tarefas ao mesmo tempo sem conflito? |
| [04 Humano no circuito](Aula-04-Humano-no-circuito/) | Onde a pessoa aprova e onde o agente segue sozinho? |
| [05 Limites](Aula-05-Limites/) | O que impede a automação de sair do controle? |

## Preparação

- O gestor com spec, tarefas rastreáveis, Docker e pipeline (Módulos 09 a 16).
- Um orçamento de tokens pequeno e **limites configurados** no provedor (Módulo 17).

## Entregável do módulo

Um orquestrador mínimo (`tools/orquestrador/`) que lê tarefas, gera o Taskfile, executa as etapas implementar, revisar e testar com agentes diferentes, em worktrees paralelas, com pontos de aprovação humana e limites de rodadas, custo e tempo.
