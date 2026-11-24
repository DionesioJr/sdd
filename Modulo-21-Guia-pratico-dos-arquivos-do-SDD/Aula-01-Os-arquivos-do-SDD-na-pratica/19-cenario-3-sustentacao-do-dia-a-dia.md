## Cenário 3 · Sustentação: pedidos do dia a dia

| Pedido | Comece por | Depois |
|---|---|---|
| Título deve aceitar 150 caracteres, e não 120 | `requirements.md` (muda o CA e a versão) | Teste → código |
| Trocar SQLite por PostgreSQL | **Novo ADR** que substitui o 0001 | `design.md` → tarefas de migração |
| Atualizar uma biblioteca | `design.md` (versão da stack) | Suíte de testes inteira |
| Melhorar o código sem mudar o comportamento | Testes de caracterização | Refatorar → testes iguais |
| Sistema antigo, sem nenhuma spec | **Spec reversa** | Depois segue o cenário 2 ou 3 |

**Regra**: se o comportamento muda, a spec muda **primeiro**. Se só o interior muda, os testes **não** mudam.

<!--
Refatoração: Módulo 14, Aula 05. Sistema sem spec: Módulo 14, Aula 02 (brownfield).
-->
