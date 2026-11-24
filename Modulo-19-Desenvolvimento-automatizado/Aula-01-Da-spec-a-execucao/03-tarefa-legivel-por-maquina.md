# Tarefas que uma máquina entende

Para automatizar, a tarefa precisa ser **estruturada**:

```md
---
id: EQP-T-02
titulo: API de convites
atende: [EQP-RF-02]
depende: [EQP-T-01]
modulo: equipes
risco: medio
status: pronta
verificacao: npm run test:docker
---
(corpo: objetivo, ler antes, não ler, pronto quando)
```

O **frontmatter** é lido por script; o **corpo**, pelo agente.

Tudo que você construiu (IDs, dependências, módulos, verificação) agora é **dado**.

<!--
Os módulos 07, 09 e 11 produziram exatamente esses campos. Sem eles, não há automação.
-->
