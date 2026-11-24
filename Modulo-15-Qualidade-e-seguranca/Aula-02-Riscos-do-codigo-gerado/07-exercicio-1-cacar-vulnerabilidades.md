# Exercício 1: Cace as vulnerabilidades

**Objetivo**: reconhecer padrões inseguros.

No código abaixo, aponte **todos** os problemas e como corrigi-los:

```ts
app.get("/tarefas/:id", async (req, res) => {
  const t = await db.query(
    `SELECT * FROM tarefa WHERE id = ${req.params.id}`
  );
  res.json(t);
});
const SENHA_ADMIN = "admin123";
```

**Observe**: quantos problemas distintos? Em que critério do checklist cada um cairia?

<!--
Tempo: 20 min.
Problemas: injeção SQL; sem autorização (qualquer um vê qualquer tarefa); sem validação do id; segredo no código; senha fraca.
-->
