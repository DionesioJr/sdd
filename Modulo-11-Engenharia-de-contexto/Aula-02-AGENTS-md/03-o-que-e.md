# O `AGENTS.md`

Um arquivo na raiz do projeto que o agente **lê no início de toda sessão**. O Pi carrega o `AGENTS.md` da pasta atual e das pastas acima.

- Serve para **regras fixas**: o que não muda de tarefa para tarefa.
- Não é a spec, não é o design.
- Cada linha **custa tokens em toda sessão**.

Depois de editar, use `/reload` no Pi para recarregar.

<!--
Outros agentes usam nomes parecidos (CLAUDE.md etc.); o conceito é o mesmo.
-->
