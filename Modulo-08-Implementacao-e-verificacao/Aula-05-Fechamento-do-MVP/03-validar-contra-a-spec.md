# Validar contra a Product Spec

Percorra **todos** os critérios de aceite:

| Critério | Teste | Resultado |
|---|---|---|
| CA-01.1 | `criar.test.ts` | Passa |
| CA-03.2 | `concluir.test.ts` | Passa |
| RNF-01 (500 tarefas < 1 s) | medição manual | Falha |

- Critério com teste: o resultado vem da execução.
- Critério sem teste automático: verifique **à mão** e registre.
- Falhas viram **novas tarefas**, e não correções no improviso.

<!--
Esse quadro é o embrião da matriz de rastreabilidade do Módulo 12.
-->
