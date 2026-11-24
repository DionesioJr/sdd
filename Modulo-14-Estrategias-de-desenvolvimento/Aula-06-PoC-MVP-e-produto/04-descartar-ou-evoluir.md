# O que descartar, o que evoluir

**Da PoC, descarte**: o código. Quase sempre.

**Da PoC, guarde**:

- as **perguntas respondidas**;
- as **decisões** (viram ADRs);
- os **riscos** descobertos;
- trechos **isolados e bons**, reescritos com testes.

Regra: **PoC não vai para produção.** Se funcionou, **especifique** e **construa de novo**, agora com spec, testes e ambiente. Com agente, reconstruir é barato.

<!--
A frase "construa de novo" costuma encontrar resistência. Lembrar: o custo de gerar código é baixo; o de manter código sem spec é alto.
-->
