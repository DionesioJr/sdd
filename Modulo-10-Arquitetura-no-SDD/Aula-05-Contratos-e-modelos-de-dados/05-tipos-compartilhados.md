# Tipos compartilhados

Frontend e backend usam os **mesmos** schemas e tipos, num pacote compartilhado:

```
packages/
├── shared/        ← schemas Zod e tipos
├── api/
└── web/
```

- Mudou o contrato? O compilador mostra **todo** lugar afetado, nos dois lados.
- O agente que mexe no backend **vê** o que o frontend espera.

Regra: o contrato muda **primeiro**, e os dois lados se ajustam.

<!--
Em um monorepo simples, isso evita divergência silenciosa entre frontend e backend.
-->
