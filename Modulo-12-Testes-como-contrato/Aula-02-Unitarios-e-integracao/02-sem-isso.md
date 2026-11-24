# A suíte verde que não protege

100 testes passam. Mas:

- metade confere que **a função chama a função**, com tudo mockado;
- vários repetem a fórmula do código;
- nenhum cobre o erro de rede.

Um defeito real chega à produção. A suíte seguiu verde.

- Para que servem testes que nunca falham?

<!--
Testes que não podem falhar dão uma falsa sensação de segurança, que é pior do que não ter testes.
-->
