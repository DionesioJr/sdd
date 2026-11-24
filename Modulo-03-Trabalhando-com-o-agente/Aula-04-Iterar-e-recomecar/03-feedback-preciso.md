# Feedback preciso

Em vez de "não funcionou", entregue:

1. **O que você esperava.**
2. **O que aconteceu** (a saída do erro, completa).
3. **Uma única correção** a tentar.

```
Esperado: concluir("1") marca a tarefa como concluída.
Obtido: TypeError: Cannot read properties of undefined (reading 'concluida')
Causa provável: concluir recebe string, mas o id é número.
Corrija apenas isso, sem mexer em outras funções.
```

<!--
Ensinar a copiar a mensagem de erro integral. O modelo é muito bom com mensagens de erro reais.
-->
