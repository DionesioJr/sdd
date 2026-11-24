# Volumes, rede e saúde

- **Volumes**: guardam dados que devem **sobreviver** ao container (banco).
- **Rede**: os serviços se enxergam pelo **nome** (`email`, `db`).
- **Healthcheck**: informa quando um serviço está **realmente pronto**.

```yaml
  db:
    image: postgres:16
    volumes: ["dados:/var/lib/postgresql/data"]
    healthcheck:
      test: ["CMD", "pg_isready"]
```

`docker compose down -v` apaga os dados: **ambiente limpo em um comando**.

<!--
Ambiente limpo é ótimo para testes e para reproduzir bugs.
-->
