# Exercício 1: Schemas como fonte única

**Objetivo**: migrar o modelo de dados para Zod.

1. Crie `packages/shared` (ou `src/compartilhado`) com os schemas de **Tarefa** e **Equipe**.
2. Derive os tipos com `z.infer`.
3. Use os schemas para **validar** a entrada da API.

**Observe**: quantos tipos e validações duplicados você removeu?

<!--
Tempo: 40 min.
Verificar com npx tsc --noEmit.
-->
