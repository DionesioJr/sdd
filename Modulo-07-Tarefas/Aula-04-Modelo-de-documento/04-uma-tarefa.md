# O que uma tarefa precisa ter

```md
### T-03 Concluir tarefa
- [ ] Status
- Atende: RF-03
- Depende de: T-01
- Arquivos esperados: src/dominio/tarefa.ts, src/api/tarefas.ts
- Pronto quando:
  - CA-03.1: tarefa pendente passa a concluída
  - CA-03.2: data de conclusão é registrada
- Verificação: `npm test -- concluir`
```

**Pronto quando** e **Verificação** são o que torna a tarefa executável por um agente.

<!--
"Arquivos esperados" ajuda a detectar quando o agente se espalha. Não é regra rígida.
-->
