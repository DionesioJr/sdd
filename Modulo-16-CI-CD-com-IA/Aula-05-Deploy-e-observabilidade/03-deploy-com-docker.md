# Deploy com Docker

Fluxo: Merge na `main` → Pipeline → Imagem publicada (tag) → Deploy → Verificação

- A **imagem** é a mesma que foi testada (Módulo 13). Nada de "construir de novo em produção".
- **Tag** por versão (`v0.4.2`): sempre se sabe o que está no ar.
- **Verificação** pós-deploy: um *health check* confirma que subiu.
- **Rollback**: voltar à tag anterior em **um comando**.

Deploy deve ser **rotina**: pequeno, frequente, reversível.

<!--
A plataforma de destino varia (VPS, nuvem, orquestrador). O princípio: imagem versionada e rollback simples.
-->
