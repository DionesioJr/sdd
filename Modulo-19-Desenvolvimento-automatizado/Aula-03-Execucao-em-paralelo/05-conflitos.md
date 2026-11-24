# Conflitos e limites

- **Conflitos de merge**: inevitáveis às vezes. O merge é **sequencial**, na ordem em que os PRs passam; o seguinte **atualiza** a partir da `main`.
- **Teto de concorrência**: 2 ou 3 tarefas ao mesmo tempo, e não 20. Mais agentes é mais custo, mais revisão e mais conflito.
- **A revisão humana é o limite real**: não adianta produzir mais PRs do que alguém consegue revisar.

Meça: **PRs concluídos por dia** versus **PRs que esperam revisão**.

<!--
O gargalo se move: da implementação para a revisão. Mostrar isso com os números do exercício.
-->
