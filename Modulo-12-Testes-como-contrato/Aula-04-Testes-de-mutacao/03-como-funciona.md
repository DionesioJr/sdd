# Como a mutação funciona

A ferramenta **estraga o código de propósito**, um pouco de cada vez, e roda os testes:

Fluxo: Altera o código → Roda os testes → Falhou? Mutante morto · Passou? Mutante sobrevivente

Exemplos de mutação: trocar `>` por `>=`, `+` por `-`, apagar uma condição.

- **Mutante morto**: algum teste percebeu. Bom.
- **Mutante sobrevivente**: nenhum teste percebeu. **Falta teste.**

O **escore de mutação** é a proporção de mutantes mortos.

<!--
Em TypeScript, a ferramenta usual é o StrykerJS. Seguir a documentação oficial para a configuração.
-->
