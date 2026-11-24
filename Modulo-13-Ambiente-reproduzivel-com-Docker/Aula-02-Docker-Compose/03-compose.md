# O `compose.yaml`

```yaml
services:
  api:
    build: .
    ports: ["3000:3000"]
    environment:
      SMTP_HOST: email
    depends_on: [email]

  email:
    image: axllent/mailpit
    ports: ["8025:8025"]
```

`docker compose up` sobe **tudo**: a API e um servidor de e-mail de teste, que mostra os e-mails enviados pelas notificações num painel local.

<!--
Mailpit é um servidor SMTP de teste. Útil para testar notificações sem enviar e-mail de verdade.
-->
