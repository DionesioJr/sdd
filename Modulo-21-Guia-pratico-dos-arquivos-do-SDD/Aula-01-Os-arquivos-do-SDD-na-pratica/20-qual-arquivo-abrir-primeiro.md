# Qual arquivo abrir primeiro: cinco perguntas

1. Muda **o que** o sistema faz? → `requirements.md`, antes de tudo.
2. Muda **como** é construído? → `design.md`; se for difícil de reverter, um novo ADR.
3. Há **trabalho a planejar**? → `tasks.md`, com cada tarefa ligada a um RF.
4. Vai **executar** uma tarefa agora? → o Taskfile, só com o contexto necessário.
5. O agente **erra do mesmo jeito** de novo? → uma linha no `AGENTS.md`.

**Regra de ouro**: o código vem **depois**. Sempre.

<!--
Use as perguntas na ordem: a primeira que responder "sim" é por onde começar. Várias podem ser "sim" ao mesmo tempo.
-->
