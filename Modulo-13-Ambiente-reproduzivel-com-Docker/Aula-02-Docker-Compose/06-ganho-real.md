# O ganho real

| Sem isso | Com isso |
|---|---|
| Dez passos manuais | `docker compose up` |
| Dados antigos contaminam testes | `down -v` limpa |
| Segredo no código ou no chat | `.env` fora do repositório |
| Serviços que não se acham | Rede por nome |

**Ganho real**: o sistema completo, com dependências, sobe do mesmo jeito para qualquer pessoa, agente ou pipeline.

<!--
Conectar com testes de integração do Módulo 12: o banco real vem do Compose.
-->
