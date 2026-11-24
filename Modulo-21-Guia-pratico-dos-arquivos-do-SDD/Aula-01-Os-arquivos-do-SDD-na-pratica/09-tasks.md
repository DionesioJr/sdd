# `tasks.md`: o que fazer e em que ordem

```md
# Tarefas: Gestor de Tarefas
Status: Aprovado · Atende: requirements.md v1 · design.md v1

## Cobertura
| Requisito | Tarefas |
|---|---|
| RF-01 Criar | T-01 |
| RF-02 Listar | T-02 |
| RF-03 Concluir | T-03 |

## Tarefas
### T-01 Esqueleto: criar tarefa de ponta a ponta
- [x] Atende: RF-01 · Depende de: nenhuma
- Pronto quando: CA-01.1, CA-01.2
- Verificação: `npm test -- criar`

### T-03 Concluir tarefa
- [ ] Atende: RF-03 · Depende de: T-01
- Pronto quando: CA-03.1, CA-03.2
- Verificação: `npm test -- concluir`
```

**Use em**: escolher a próxima tarefa e saber o que falta. Marque `[x]` ao concluir.

<!--
O esqueleto ponta a ponta vem primeiro. A tabela de cobertura mostra se algum RF ficou sem tarefa.
-->
