# Cache e `.dockerignore`

Cada instrução cria uma **camada**, que o Docker reaproveita se nada mudou.

- Copie `package*.json` **antes** do restante: assim, `npm ci` só roda de novo quando as dependências mudam.
- O `.dockerignore` impede de enviar lixo e segredos:

```
node_modules
dist
.git
.env
```

Sem o `.dockerignore`, o `.env` (e os segredos) pode **entrar na imagem**.

<!--
Ligar a segredos: Módulo 02 (gitignore) e Módulo 15 (segredos).
-->
