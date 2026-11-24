# ADR: por que decidimos assim

`docs/architecture/adr/0001-sqlite-no-mvp.md`

```md
# 0001: SQLite como banco do MVP
Status: Aceito · 2026-11-19

## Contexto
Equipe de uma pessoa, sem servidor, MVP em duas semanas.

## Decisão
Usar SQLite em arquivo local.

## Alternativas
- PostgreSQL: mais operação do que o MVP precisa.

## Consequências
+ Zero infraestrutura, testes rápidos.
- Com acessos simultâneos, será preciso trocar (novo ADR).
```

**Use em**: decisão difícil de reverter. **Regra**: nunca edite um ADR antigo; crie o 0004 que **substitui** o 0001 e marque o antigo como *Substituído*.

<!--
Um ADR por decisão, meia página. O design.md aponta para ele ("ADR 0001").
-->
