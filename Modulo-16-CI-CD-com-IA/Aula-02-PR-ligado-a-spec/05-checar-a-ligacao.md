# Verificar a ligação automaticamente

Uma etapa do pipeline confere o PR:

- o corpo cita um **ID de tarefa** que existe;
- cita **requisitos** que existem na spec;
- a branch e os commits seguem a convenção (`EQP-T-02`);
- se há mudança de spec, o status e a versão foram atualizados.

PR sem ligação **não passa**. Isso mantém a rastreabilidade **viva**, sem esforço humano.

<!--
Pode ser um script simples de leitura do corpo do PR e consulta aos arquivos.
-->
