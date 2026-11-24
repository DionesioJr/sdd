# Do desejo ao critério verificável

| Desejo | Critério verificável | Como se verifica |
|---|---|---|
| "Seguro" | Um usuário **nunca** acessa tarefa de outro (`403`) | Teste de autorização |
| "Seguro" | Senhas são guardadas com hash forte | Teste e revisão |
| "Rápido" | Listar 500 tarefas leva menos de 1 s | Teste de desempenho |
| "Acessível" | Todas as ações funcionam só com teclado | E2E por teclado |
| "Acessível" | Nenhuma violação crítica em verificação automática | Verificação de acessibilidade no E2E |

Um RNF sem **como se verifica** ainda é só desejo.

<!--
A verificação automática de acessibilidade existe (por exemplo, o axe-core integrado ao Playwright), mas não cobre tudo: complementar com teste de teclado.
-->
