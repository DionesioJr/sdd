# O que torna um requisito testável

Um requisito é testável quando tem:

1. **Entrada** definida (o que se faz).
2. **Resultado observável** (o que se vê).
3. **Determinismo** (mesma entrada, mesmo resultado).
4. **Condições de contorno** (limites, erros).

| Não testável | Testável |
|---|---|
| "Avisa na hora certa" | "Quando faltam 24 h para o prazo, gera uma notificação" |
| "É rápido" | "Listar 500 tarefas leva menos de 1 s" |

<!--
Uma pergunta: dá para escrever o teste sem fazer nenhuma pergunta ao autor da spec?
-->
