# Detectar loops e deriva

Sinais de um agente em loop ou à deriva:

- **mesmo erro** repetido em duas rodadas seguidas;
- **mesmo arquivo** alterado e revertido;
- **testes ou configurações** alterados para passar;
- **arquivos fora do escopo** tocados;
- **custo** subindo sem tarefas concluídas.

Cada sinal vira uma **regra de parada** automática. Quando um deles aparece, **o orquestrador interrompe**.

<!--
Retomar Módulo 16, Aula 04: as regras da correção automática são as mesmas, em escala maior.
-->
