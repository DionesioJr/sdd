# Exercício 2: Quando parar

**Objetivo**: testar os limites.

Provoque **dois** casos:

1. Uma falha de **segurança** (ex.: remova uma checagem de autorização, com o teste correspondente falhando).
2. Uma falha **causada por mudança de requisito** (o teste espera o comportamento antigo).

---

## Exercício 2: Observe

3. O agente tentou "corrigir"? Onde ele **deveria ter parado**?
4. Escreva a **regra de parada** (automática) que o pipeline deveria ter.

**Discussão**: como o pipeline pode **verificar** que a correção automática não tocou nos testes nem nos portões?

<!--
Tempo: 50 min.
Resposta: checagem de arquivos alterados pela correção (bloquear testes e arquivos do pipeline).
-->
