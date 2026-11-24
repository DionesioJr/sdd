# Git worktree: uma pasta por tarefa

```bash
git worktree add ../gestor-EQP-T-02 -b EQP-T-02
git worktree add ../gestor-NOT-T-01 -b NOT-T-01
```

Cada **worktree** é uma pasta com **sua branch**, ligada ao mesmo repositório:

- cada agente trabalha **no seu diretório**;
- arquivos não se misturam;
- ao terminar, `git worktree remove` limpa tudo.

Com **Docker** (Módulo 13), cada worktree também pode ter **seu container**.

<!--
Worktree é mais leve do que clonar o repositório várias vezes.
-->
