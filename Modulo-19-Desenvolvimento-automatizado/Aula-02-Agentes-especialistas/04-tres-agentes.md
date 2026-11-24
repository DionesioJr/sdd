# Três agentes, três contratos

### 1. Implementador

**Entrada**: Taskfile. **Escreve** código e testes dos critérios. **Saída**: commit na branch.

### 2. Revisor

**Entrada**: diff, Taskfile e requisitos. **Só lê.** **Saída**: relatório (aprovado ou lista de problemas).

### 3. Testador

**Entrada**: critérios e o sistema rodando. **Roda** a suíte e os fluxos. **Saída**: relatório de verificação.

Cada agente tem seu `AGENTS.md` e suas **skills** (Módulo 11).

<!--
O revisor pode ser o mesmo da revisão automática do Módulo 16, agora numa etapa do fluxo.
-->
