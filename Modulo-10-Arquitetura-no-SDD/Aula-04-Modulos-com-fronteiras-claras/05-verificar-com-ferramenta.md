# Verificar com ferramenta

Pedir ao agente "respeite as fronteiras" é desejo. **Uma ferramenta confere**:

- um **linter de dependências** (como `dependency-cruiser` ou regras do ESLint) falha o build se um módulo importar o que não deveria;
- roda no `npm test` e, depois, no CI.

```bash
npx depcruise src --validate   # falha se uma regra for quebrada
```

Quando a regra está **no pipeline**, ninguém (nem o agente) precisa lembrar dela.

<!--
Detalhes de configuração dependem da ferramenta. O importante é o princípio: regra automatizada.
-->
