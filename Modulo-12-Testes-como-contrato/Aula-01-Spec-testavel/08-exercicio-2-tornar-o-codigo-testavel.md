# Exercício 2: Código testável

**Objetivo**: tirar dependências escondidas.

1. Procure no gestor usos diretos de `new Date()`, `Math.random()` ou acesso ao banco dentro do domínio.
2. Peça ao agente para refatorar passando o relógio como parâmetro, **sem alterar o comportamento**.

---

## Exercício 2: Prove

3. Escreva um teste que usa uma data fixa e passa **sempre**.

**Discussão**: antes da refatoração, esse teste seria possível?

<!--
Tempo: 40 min.
Verificar que os testes anteriores continuam passando (refatoração não muda comportamento).
-->
