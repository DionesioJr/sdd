# Refatorar: melhorar por dentro

**Refatoração** muda a **estrutura** do código, e **não** o **comportamento observável**.

- Sim: extrair função, renomear, mover módulo, remover duplicação.
- Não: corrigir bug, adicionar funcionalidade, mudar formato de saída.

Se o comportamento muda, **não** é refatoração: é feature ou bug. Faça **separado**, em outro commit.

**Regra**: testes passam **antes** e **depois**, **sem alteração**.

<!--
Misturar refatoração e mudança de comportamento torna impossível saber o que causou um problema.
-->
