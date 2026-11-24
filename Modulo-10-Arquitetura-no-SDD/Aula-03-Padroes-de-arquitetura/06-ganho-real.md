# O ganho real

| Sem isso | Com isso |
|---|---|
| O agente decide onde colocar tudo | A estrutura já diz onde |
| Regra de negócio espalhada | Regras no domínio |
| Cada tarefa de um jeito | Tarefas parecidas, código parecido |
| Difícil testar | Domínio testável sem banco nem HTTP |

**Ganho real**: o agente imita um padrão claro, em vez de inventar um novo a cada tarefa. O código fica previsível e testável.

<!--
O domínio puro (sem dependências externas) é o que mais facilita os testes do Módulo 12.
-->
