# "Na minha máquina funciona"

Ana pede ao agente para instalar as dependências. Dá erro. O agente tenta consertar: troca versões, apaga `node_modules`, reinstala, edita configurações.

Quarenta minutos depois, o projeto roda na máquina da Ana. Na do Pedro, não.

- Qual era o problema de verdade?
- Quanto contexto e quanto dinheiro de tokens foram gastos nisso?
- O que a Ana poderia ter conferido em dez segundos?

<!--
Causa real: Ana usa Node 18, o projeto pede Node 22. O agente tratou o sintoma, não a causa.
Ambiente inconsistente gasta contexto (Aula 02 do Módulo 01) e dinheiro (Aula 04).
-->
