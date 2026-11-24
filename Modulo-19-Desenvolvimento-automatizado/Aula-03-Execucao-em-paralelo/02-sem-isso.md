# Dois agentes, uma pasta

Você coloca dois agentes para trabalhar ao mesmo tempo **na mesma pasta**:

- um edita `rotas.ts` enquanto o outro também;
- um roda os testes no meio da edição do outro, e vê falhas que não existem;
- um faz `git checkout` e **apaga** o trabalho do outro.

Paralelismo sem **isolamento** é **corrida de dados** no seu projeto.

<!--
Mesmo problema de duas pessoas editando o mesmo arquivo sem branches.
-->
