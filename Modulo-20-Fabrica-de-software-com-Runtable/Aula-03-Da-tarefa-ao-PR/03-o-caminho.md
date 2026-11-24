# O caminho da tarefa

Fluxo: Fila → Agente da coluna → Worktree isolada → Checagens → Próxima coluna → PR

1. A tarefa entra na **fila** com seus campos (requisito, dependências, módulo, risco).
2. O `rtb serve` **puxa** a tarefa para o agente da **coluna** atual.
3. Execução numa **worktree isolada**, com o **contexto da tarefa** (Módulo 11).
4. O **runner** faz o commit e roda as **checagens**.
5. Se passa, a tarefa avança: **implementar → revisar → testar**.
6. No fim, a entrega sai como **PR** (ou merge), com **CI verde** quando exigido.

<!--
Mostrar na prática: uma tarefa simples percorrendo as colunas.
-->
