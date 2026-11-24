# Commits pequenos e rastreáveis

```bash
git commit -m "T-03: concluir tarefa (RF-03)"
```

- **Um commit por tarefa** (ou por etapa dela).
- Mensagem com o **ID da tarefa** e o **requisito**.
- Marque `[x]` no `tasks.md` no mesmo commit.

Se algo quebrar, `git revert` desfaz **só aquela** tarefa.

<!--
A mensagem de commit com ID alimenta a rastreabilidade e, depois, o PR ligado à spec (Módulo 16).
-->
