# Componentes: as peças

Divida o sistema em partes com **uma responsabilidade** cada:

```
[Frontend (React)]  →  [API (Fastify)]  →  [Domínio: regras de tarefa]  →  [Banco (SQLite)]
```

- **Frontend**: mostra e coleta.
- **API**: recebe pedidos e valida entradas.
- **Domínio**: regras do negócio (ex.: "só tarefa pendente pode ser concluída").
- **Persistência**: guarda e lê dados.

Cada componente pode ser entendido e testado **sozinho**.

<!--
Não chamar de arquitetura ainda. Aqui é a divisão mínima. Fronteiras e padrões entram no Módulo 10.
-->
