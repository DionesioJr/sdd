# A estrutura

```
docs/architecture/
├── 00-arquitetura-geral.md
├── adr/
│   ├── 0001-sqlite-no-mvp.md
│   └── 0002-monolito-modular.md
└── modules/
    ├── tarefas.md
    ├── equipes.md
    ├── notificacoes.md
    └── relatorios.md
```

Cada módulo de design tem o **mesmo nome** do domínio de produto (`product/equipes.md` ↔ `modules/equipes.md`).

<!--
A correspondência de nomes facilita a rastreabilidade e a navegação do agente.
-->
