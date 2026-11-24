# Os riscos clássicos (OWASP)

O **OWASP Top 10** lista as falhas mais comuns em aplicações web. As que a IA mais gera:

| Risco | Como aparece |
|---|---|
| **Injeção** | SQL ou comandos montados com texto do usuário |
| **Controle de acesso quebrado** | Rota sem verificar **quem** pede (ver tarefa de outro) |
| **Falhas criptográficas** | Senha em texto puro ou hash fraco |
| **Configuração insegura** | CORS aberto, modo debug em produção |
| **Entrada não validada** | Confiar no que o frontend envia |

Defesa: **consultas parametrizadas**, validação (Zod) em toda entrada, **autorização** em toda rota.

<!--
Consultar a lista atual do OWASP; ela é revisada periodicamente.
-->
