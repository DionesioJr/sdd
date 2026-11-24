# O Dockerfile do gestor

```dockerfile
FROM node:22-slim AS base
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

CMD ["node", "dist/server.js"]
```

- `FROM`: parte de uma imagem com a **versão do Node declarada**.
- `npm ci`: instala exatamente o que o `package-lock.json` manda.
- A versão do Node aparece **no código**, e não na cabeça de alguém.

<!--
Confirmar a versão LTS atual do Node na época; "22" é só um exemplo.
-->
