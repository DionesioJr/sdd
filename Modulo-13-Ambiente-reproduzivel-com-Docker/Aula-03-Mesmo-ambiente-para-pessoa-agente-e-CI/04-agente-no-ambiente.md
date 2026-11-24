# O agente usa o ambiente do projeto

No `AGENTS.md`:

```md
## Comandos (sempre via Docker)
- Testes: `npm run test:docker`
- E2E: `npm run e2e:docker`
- Fronteiras: `npm run deps:docker`
Nunca instale pacotes globais na máquina.
```

Vantagens:

- o agente roda **no mesmo ambiente** que o CI;
- o que ele instala **fica no container**, e não no seu computador;
- o estrago de um comando errado fica **contido**.

<!--
Opcional: rodar o próprio agente dentro de um dev container. Aprofundar no Módulo 15 (sandbox).
-->
