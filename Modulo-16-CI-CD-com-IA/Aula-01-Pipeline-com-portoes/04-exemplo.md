# Um pipeline mínimo

```yaml
# .github/workflows/ci.yml
name: CI
on: [pull_request]
jobs:
  verificar:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm run test:docker
      - run: npm run deps:docker
      - run: npm run matriz
      - run: npm audit --audit-level=high
```

Repare: o pipeline roda **os mesmos scripts** que você e o agente (Módulo 13).

Se falha no CI, falha igual na sua máquina.

<!--
Versões de ações e detalhes mudam; consultar a documentação. O princípio: o CI chama os scripts do projeto.
-->
