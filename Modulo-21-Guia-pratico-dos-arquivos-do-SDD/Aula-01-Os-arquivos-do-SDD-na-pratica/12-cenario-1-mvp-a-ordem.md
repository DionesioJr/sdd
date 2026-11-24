## Cenário 1 · MVP do zero: a ordem dos arquivos

Ciclo: Ideia → requirements → design e ADR → AGENTS.md → tasks → Taskfile e código → Fechar o MVP

| Etapa | Arquivo | Ação | Portão (só segue se...) |
|---|---|---|---|
| 1. Especificar | `requirements.md` | **Cria** (v1) | Você leu e aprovou |
| 2. Projetar | `design.md` e ADRs | **Cria** | Todo RF do MVP está na Cobertura |
| 3. Preparar o agente | `AGENTS.md` | **Cria**, curto | Os comandos de teste rodam |
| 4. Planejar | `tasks.md` | **Cria** | Todo RF do MVP tem tarefa |
| 5. Executar (por tarefa) | Taskfile | **Cria, usa, arquiva** | Testes passam e há commit |
| 6. Fechar | `requirements.md`, `tasks.md` | **Atualiza** status | Todo critério foi verificado |

<!--
É o que o aluno fez nos Módulos 05 a 08, agora numa tabela só. A etapa 5 se repete, uma vez por tarefa.
-->
