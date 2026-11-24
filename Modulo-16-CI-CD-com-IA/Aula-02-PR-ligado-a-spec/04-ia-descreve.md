# A IA descreve, você confere

```
Gere a descrição do PR a partir de:
- o Taskfile docs/taskfiles/EQP-T-02.md;
- o diff (git diff main...);
Use o template. Cite os critérios atendidos e como foram testados.
Liste o que mudou FORA do escopo do Taskfile. Não invente.
```

A IA é ótima em **resumir** o diff. Mas ela pode **atestar o que não aconteceu** (*"todos os testes passam"*). O CI é quem **prova**.

**Regra**: afirmações verificáveis vêm do **pipeline**, e não do texto.

<!--
Retomar o Módulo 01: o texto parece convincente mesmo quando errado.
-->
