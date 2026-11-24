# Cada sobrevivente é uma pergunta

```
function vencida(t, agora) { return t.prazo < agora; }
//                            mutante: t.prazo <= agora   ← sobreviveu
```

Ninguém testou o caso **prazo igual a agora**. O limite estava sem teste.

Para cada sobrevivente:

1. É um **teste faltando**? Escreva-o.
2. É uma **mutação equivalente** (não muda o comportamento)? Ignore.

<!--
Mutantes equivalentes são raros e normalmente óbvios. Não deixar o aluno ignorar sem pensar.
-->
