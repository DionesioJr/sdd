# O Taskfile

Um arquivo por tarefa: **como executar esta tarefa**.

```md
# T-03 Concluir tarefa

## Objetivo
Marcar uma tarefa pendente como concluída.

## Ler antes
- docs/requirements.md: RF-03
- docs/design.md: modelo Tarefa, PATCH /tarefas/:id/concluir
- src/dominio/tarefa.ts

## Restrições
- Sem dependências novas. Não alterar outras rotas.

## Pronto quando
- CA-03.1, CA-03.2 (testes passam)

## Verificação
npm test && npx tsc --noEmit
```

<!--
Salvar em docs/taskfiles/T-03.md. Pode ser gerado pelo agente a partir do tasks.md.
-->
