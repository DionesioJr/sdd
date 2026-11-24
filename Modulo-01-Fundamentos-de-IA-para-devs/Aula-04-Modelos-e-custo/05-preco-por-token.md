# Como se cobra

O preço é por **milhão de tokens**, separado em:

- **entrada**: tudo que você envia (o contexto inteiro);
- **saída**: o que o modelo gera. Costuma ser bem mais cara.

```
custo = (tokens de entrada ÷ 1.000.000 × preço de entrada)
      + (tokens de saída   ÷ 1.000.000 × preço de saída)
```

<!--
Lembrar da Aula 02: o contexto inteiro é reenviado a cada rodada.
Isso é a chave para entender o próximo slide.
-->
