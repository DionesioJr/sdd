# O código que "funciona" e está aberto

O agente entrega a busca de tarefas por título:

```ts
const sql = `SELECT * FROM tarefa WHERE titulo LIKE '%${busca}%'`;
```

Funciona nos testes. Com a entrada `'; DROP TABLE tarefa; --`, **apaga a tabela**.

O código parecia profissional e **era um padrão inseguro** que a IA aprendeu de milhares de exemplos ruins.

<!--
A IA aprendeu com código real, incluindo o inseguro. Plausível não é seguro (Módulo 01).
-->
