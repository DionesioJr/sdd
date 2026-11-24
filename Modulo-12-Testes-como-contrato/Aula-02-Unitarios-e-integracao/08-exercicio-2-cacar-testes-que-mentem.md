# Exercício 2: Cace os testes que mentem

**Objetivo**: afiar o olho.

Neste teste, aponte **todos** os problemas:

```ts
it("cria equipe", () => {
  const repo = { salvar: vi.fn() };
  criarEquipe(repo, { nome: "Time A" });
  expect(repo.salvar).toHaveBeenCalled();
});
```

---

## Exercício 2: Reescreva

2. Reescreva usando um banco real em memória e verificando o **resultado**.
3. Acrescente dois casos: nome vazio e nome duplicado.

**Discussão**: o que o teste antigo daria como verde que o novo pega?

<!--
Tempo: 30 min.
Problemas: mock de tudo, só confere chamada, não verifica o que foi salvo, sem caso de erro.
-->
