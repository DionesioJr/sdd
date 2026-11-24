# A geração é um loop

```
texto = pedido
repita:
    próximo = modelo.escolher(texto)
    texto = texto + próximo
até o modelo escolher "fim"
```

Consequências:

- Cada token depende de **tudo** que veio antes, inclusive do que o próprio modelo já escreveu.
- Um começo errado puxa o resto para o erro.
- Ele não volta para apagar. Quem corrige é você, ou uma nova rodada.

<!--
Exemplo para contar: o modelo começa importando uma biblioteca errada; daí em diante,
todo o código é coerente com essa biblioteca errada. Coerência não é correção.
-->
