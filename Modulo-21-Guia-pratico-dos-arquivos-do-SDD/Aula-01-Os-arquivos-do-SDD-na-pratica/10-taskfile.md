# Taskfile: como executar esta tarefa

`docs/taskfiles/T-03.md`, gerado a partir do `tasks.md`

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
- CA-03.1 e CA-03.2 com testes passando

## Verificação
npm test && npx tsc --noEmit
```

**Use em**: no momento de **executar**. O agente recebe só este arquivo e os trechos que ele cita.

<!--
Um Taskfile por tarefa. Ao concluir, arquive ou apague: o histórico fica no commit e no tasks.md.
-->
