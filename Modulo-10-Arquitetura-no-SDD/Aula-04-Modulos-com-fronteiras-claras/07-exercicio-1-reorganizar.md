# Exercício 1: Reorganize em módulos

**Objetivo**: aplicar fronteiras ao código do gestor.

1. Mova o código para `src/tarefas/` e `src/equipes/` com `index.ts` em cada um.
2. Ajuste os imports para usar **só** as interfaces públicas.
3. Desenhe o mapa de dependências entre módulos.

**Observe**: que imports tiveram de mudar? Que dependência não deveria existir?

<!--
Tempo: 45 min.
Se houver ciclo (Tarefas importando Equipes e vice-versa), discutir como quebrar.
-->
