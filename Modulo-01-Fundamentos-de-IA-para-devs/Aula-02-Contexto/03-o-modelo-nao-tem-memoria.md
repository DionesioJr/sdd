# O modelo não tem memória

A cada resposta, o modelo recebe **tudo de novo**:

```
[instruções do sistema]
[sua mensagem 1]
[resposta 1]
[sua mensagem 2]
[resposta 2]
...
[sua mensagem atual]
```

Esse pacote é o **contexto**. O que não está nele não existe para o modelo.

"Conversa" é só a ferramenta reenviando o histórico a cada rodada.

<!--
Ponto-chave: o modelo em si é igual na primeira e na centésima mensagem.
O que muda é o texto que chega até ele.
-->
