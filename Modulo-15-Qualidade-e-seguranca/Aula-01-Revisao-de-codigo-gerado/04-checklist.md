# O checklist de revisão

1. **Cumpre a spec?** Critérios do RF atendidos; nada além do escopo.
2. **Cabe no que foi pedido?** Arquivos fora do Taskfile? Dependências novas?
3. **Está correto?** Lógica, limites, erros, concorrência.
4. **É seguro?** Entradas validadas, autorização, segredos, dados pessoais.
5. **É testado?** Testes dos critérios; falham se o código quebra.
6. **Segue o projeto?** Fronteiras, padrões, glossário, guidelines.
7. **Dá para manter?** Nomes, tamanho, duplicação.

Ele cabe numa **skill** (`revisar-contra-a-spec`), como no Módulo 11.

<!--
Ordenar por risco: itens 1 a 4 primeiro. Estilo (item 7) é o que o linter já cobre.
-->
