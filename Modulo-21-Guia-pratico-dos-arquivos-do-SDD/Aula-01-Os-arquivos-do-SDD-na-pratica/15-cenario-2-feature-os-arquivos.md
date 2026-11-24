## Cenário 2 · Nova feature: o que muda em cada arquivo

Ciclo: Pedido → Impacto → requirements (novo RF) → design (só o afetado) → tasks → Taskfile e código

Exemplo: *"quero etiquetas nas tarefas"*.

| Arquivo | O que acontece |
|---|---|
| `requirements.md` | **Atualiza**: novo RF-07 com critérios; versão 1 → 2. Não reescreve os RF antigos |
| `design.md` | **Atualiza** só o afetado: modelo de dados e API; cobertura do RF-07 |
| ADR | **Só se** houver decisão difícil de reverter |
| `tasks.md` | **Acrescenta** T-08 a T-10, todas ligadas ao RF-07 |
| Taskfile | **Cria** um por tarefa nova |
| `AGENTS.md` | Quase nunca muda |

A feature **não reabre** o projeto: toca só o que ela afeta.

<!--
Os arquivos existentes são editados, não recriados. O Git mostra o diff da spec antes do diff do código.
-->
