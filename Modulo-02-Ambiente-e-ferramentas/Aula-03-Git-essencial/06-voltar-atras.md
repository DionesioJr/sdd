# Voltando atrás

| Situação | Comando |
|---|---|
| Ver o que o agente mudou | `git diff` |
| Descartar mudanças não registradas | `git restore .` |
| Guardar para depois, sem registrar | `git stash` |
| Desfazer um commit já feito, sem reescrever a história | `git revert <commit>` |

Cuidado: `git restore .` e `git reset --hard` **apagam** mudanças sem registro.

<!--
Mostrar na prática. Reforçar que só se descarta o que está registrado ou é irrelevante.
-->
