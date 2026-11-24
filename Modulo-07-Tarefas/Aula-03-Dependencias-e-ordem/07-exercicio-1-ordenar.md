# Exercício 1: Ordenar

**Objetivo**: encontrar a ordem a partir das dependências.

Ordene e aponte o que pode ser paralelo:

- T-A Tela de listagem (precisa de T-C).
- T-B Filtro por status (precisa de T-A).
- T-C Endpoint de listagem (precisa de T-D).
- T-D Modelo e banco.
- T-E Marcar como concluída (precisa de T-C).

**Observe**: qual é o caminho mais longo? Que tarefas podem andar em paralelo?

<!--
Tempo: 15 min.
Gabarito: D, C, depois A e E em paralelo, depois B. Caminho mais longo: D → C → A → B.
-->
