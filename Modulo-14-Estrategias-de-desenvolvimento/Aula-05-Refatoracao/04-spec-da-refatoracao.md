# A spec da refatoração

Uma página, com duas listas:

**Melhora (objetivo)**
- Separar cálculo e formatação em funções distintas.
- Reduzir a duplicação entre os três relatórios.

**Não pode mudar (contrato)**
- Formato e campos do resultado.
- Regras de cálculo.
- Contratos públicos do módulo.

Peça ao agente *"para cada item de **não pode mudar**, indique qual teste o protege"*. Onde não houver teste, **escreva** (caracterização).

<!--
A segunda lista é a mais importante. Ela é a spec da refatoração.
-->
