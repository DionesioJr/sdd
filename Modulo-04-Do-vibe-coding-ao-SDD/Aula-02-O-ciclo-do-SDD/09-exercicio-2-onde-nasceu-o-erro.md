# Exercício 2: Onde o erro nasceu?

**Objetivo**: usar o ciclo para localizar a origem dos defeitos.

Para cada problema, aponte **em qual fase** ele deveria ter sido evitado:

1. A tela mostra o prazo no formato americano, e ninguém pediu isso.
2. Duas funções usam bibliotecas de datas diferentes.
3. O agente implementou "notificações" que ninguém pediu.
4. O sistema aceita uma tarefa sem título e ninguém percebeu.
5. Alterar um campo exigiu mexer em oito arquivos.

**Discussão**: quantos problemas nasceram **antes** do código?

<!--
Tempo: 20 min.
Gabarito: 1 especificar (requisito não-funcional/locale); 2 projetar (decisão de stack); 3 especificar/escopo; 4 verificar (critério de aceite ausente); 5 projetar (fronteiras).
-->
