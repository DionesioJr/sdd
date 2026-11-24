# Para o gestor: monolito modular

```
src/
├── tarefas/
│   ├── dominio/       ← regras puras
│   ├── aplicacao/     ← casos de uso
│   ├── infra/         ← banco, HTTP
│   └── index.ts       ← interface pública do módulo
├── equipes/
└── notificacoes/
```

- **Monolito**: um deploy, simples de operar.
- **Modular**: cada pasta é um módulo isolado.
- **Camadas por módulo**: o domínio não conhece o banco.

Microsserviços **não** são pré-requisito de qualidade.

<!--
Registrar esta escolha num ADR (retomar o ADR 0002 do exemplo).
-->
