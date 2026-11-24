# Exercício 2: Um experimento numa branch

**Objetivo**: usar branch como espaço de teste.

1. Crie uma branch: `git switch -c experimento-prioridade`.
2. Peça ao agente para adicionar o campo `prioridade` ao tipo `Tarefa`.
3. Veja o `git diff`, rode `npx tsc --noEmit` e faça o commit.

---

## Exercício 2: Decida

4. Volte para a `main` e confirme que o campo não existe lá.
5. Decida: juntar (`git merge`) ou descartar (`git branch -D`).

**Discussão**: o que a branch protegeu? Por que essa prática continua útil quando há vários agentes?

<!--
Tempo: 20 min.
Gancho para o Módulo 19: várias branches e worktrees para vários agentes em paralelo.
-->
