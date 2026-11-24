# Gere o contexto, não o improvise

Com IDs e módulos estáveis, o Taskfile pode ser **gerado**:

- uma **skill** (`criar-taskfile`) lê a tarefa, acha o RF, o módulo e os ADRs ligados e monta o arquivo;
- você **revisa** a lista;
- o agente executa com **exatamente** esse contexto.

Isso é a base do **Módulo 19**: o fluxo automático precisa saber, sozinho, o que entregar a cada agente.

<!--
O que hoje é feito à mão amanhã será automatizado. Rastreabilidade é o que torna isso possível.
-->
