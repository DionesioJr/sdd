# Front e back que não se entendem

O frontend espera `{ "tarefas": [...] }`. A API devolve `[...]`.
Um endpoint devolve erro como `{ "erro": "..." }`; outro, como texto puro.

Cada correção quebra outra coisa, e **dois agentes** trabalhando em partes diferentes inventam formatos incompatíveis.

- Onde está escrito o formato correto?

<!--
Sem contrato, o formato é "o que o último código fez". O problema piora com vários agentes.
-->
