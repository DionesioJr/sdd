# Do critério ao pipeline

Cada RNF vira uma **verificação automática**:

- **Segurança**: testes de autorização, `npm audit`, varredura de segredos.
- **Desempenho**: teste que mede e **falha** acima do limite.
- **Acessibilidade**: verificação no E2E e teste de teclado.

Coloque-as na **matriz de rastreabilidade** (Módulo 12) como qualquer outro critério.

No Módulo 16, elas viram **portões do pipeline**: o PR que quebra um RNF **não** entra.

<!--
RNF na matriz: as lacunas ficam visíveis.
-->
