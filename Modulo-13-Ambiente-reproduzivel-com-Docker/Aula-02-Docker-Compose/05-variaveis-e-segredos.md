# Variáveis e segredos

- Configuração por **variáveis de ambiente**, e não dentro do código.
- `.env.example`: **versionado**, com nomes e valores **falsos**.
- `.env`: **fora do repositório**, com os valores reais.

```
# .env.example
DATABASE_URL=postgres://usuario:senha@db:5432/gestor
SMTP_HOST=email
```

O agente lê o **`.env.example`**: ele sabe quais variáveis existem, sem ver os valores.

<!--
Retomar "o que nunca enviar ao modelo" (Módulo 01). O .env real nunca deve entrar no contexto.
-->
