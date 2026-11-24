# Exercício 2: Um banco novo, com ADR

**Objetivo**: usar o Compose para evoluir uma decisão.

Equipes e relatórios com vários usuários podem justificar sair do SQLite.

1. Escreva o **ADR 0005**: *"PostgreSQL substitui SQLite"*, marcando o ADR 0001 como **Substituído**.
2. Acrescente o serviço `db` ao Compose, com volume e healthcheck.
3. Rode os testes de integração contra o banco novo.

---

## Exercício 2: Reproduza do zero

4. Rode `docker compose down -v` e suba tudo de novo. Os testes passam?

**Discussão**: o ADR, o Compose e os testes contam a mesma história?

<!--
Tempo: 60 min.
Se o aluno preferir manter SQLite, escrever o ADR de "manter SQLite" justificando. O importante é o registro.
-->
