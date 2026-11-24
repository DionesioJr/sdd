# Cada critério vira um teste

```md
CA-03.1  Dado que existe uma tarefa pendente,
         quando o usuário a conclui,
         então o status passa a "concluida".
```

```ts
it("CA-03.1: tarefa pendente passa a concluída", () => {
  const tarefa = criarTarefa({ titulo: "Pagar conta" });
  const resultado = concluir(tarefa);
  expect(resultado.status).toBe("concluida");
});
```

O **nome** do teste cita o critério. A **estrutura** copia Dado/Quando/Então.

<!--
Mostrar como Dado vira o arranjo, Quando vira a chamada e Então vira a asserção.
-->
