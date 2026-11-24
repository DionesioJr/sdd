# Limite 4: Erros sutis

O mais perigoso: código que **compila, roda e parece certo**.

- Regra de negócio interpretada de outro jeito.
- Caso de borda esquecido (lista vazia, data de hoje, valor zero).
- `<` no lugar de `<=`.
- Fuso horário, arredondamento, ordenação.

Esses erros passam por uma leitura rápida. Só aparecem quando alguém compara com **o comportamento esperado**.

<!--
Os três primeiros limites costumam dar erro visível. Este não.
É exatamente o que o exercício 3 vai mostrar.
-->
