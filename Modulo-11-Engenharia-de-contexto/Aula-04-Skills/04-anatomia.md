# Anatomia de uma skill

```md
---
name: criar-endpoint
description: Cria um endpoint novo no módulo indicado, com
  validação, teste e contrato. Use ao adicionar rotas HTTP.
---

# Criar endpoint

1. Leia o design do módulo em `docs/architecture/modules/`.
2. Atualize o contrato (schema Zod) **primeiro**.
3. Crie a rota seguindo `src/tarefas/infra/rotas.ts`.
4. Escreva os testes a partir dos critérios do RF.
5. Rode `npm test` e `npm run deps`.
```

A **descrição** é o que decide se a skill será usada. Escreva-a pelo **quando usar**.

<!--
Descrições vagas ("ajuda com endpoints") resultam em skills ignoradas.
-->
