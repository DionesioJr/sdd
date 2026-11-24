# O agente "melhora" o sistema que não conhece

Você pede uma funcionalidade num sistema de cinco anos, sem documentação.

O agente lê alguns arquivos, **não** entende as regras escondidas e:

- reimplementa algo que já existia;
- quebra uma regra que ninguém lembra mais;
- usa um padrão diferente do restante do código.

Funciona nos testes **dele**. Em produção, quebra o que estava funcionando.

<!--
Sistemas existentes carregam regras implícitas. Sem entendê-las, qualquer mudança é aposta.
-->
