# Um comando para cada coisa

Scripts no `package.json` que sempre usam o container:

```json
"scripts": {
  "dev:docker":  "docker compose up --build",
  "test:docker": "docker compose run --rm api npm test",
  "e2e:docker":  "docker compose run --rm e2e npx playwright test",
  "deps:docker": "docker compose run --rm api npm run deps"
}
```

**O mesmo comando** vale para você, para o agente e para o CI.

<!--
O serviço "e2e" usa a imagem oficial do Playwright, com navegadores fixos.
-->
