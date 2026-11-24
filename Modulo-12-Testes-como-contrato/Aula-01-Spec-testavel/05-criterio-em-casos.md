# Do critério aos casos de teste

Um critério gera **vários** casos. Para `Título de 1 a 120 caracteres`:

| Entrada | Esperado |
|---|---|
| 1 caractere | Aceita |
| 120 caracteres | Aceita |
| 0 (vazio) | Recusa |
| 121 caracteres | Recusa |
| Só espaços | Recusa |

Os **limites** (0, 1, 120, 121) são onde estão os bugs.

Peça ao agente: *"Para este critério, liste os casos de teste, incluindo limites."* E revise.

<!--
Mostrar que a IA ajuda a levantar casos, mas o aluno confere o que o critério realmente exige.
-->
