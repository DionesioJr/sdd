# A IA como etapa do pipeline

Fluxo: PR aberto → Pipeline verde → Revisão por IA → Comentários no PR → Pessoa decide

A IA recebe: **o diff**, o **Taskfile**, os **requisitos** e a **guideline de revisão**. E comenta:

- critérios da spec **não atendidos**;
- mudanças **fora do escopo**;
- riscos de segurança;
- testes que **não verificam** o critério.

Ela roda **depois** do pipeline verde: não gaste tokens revisando o que a máquina já barrou.

<!--
Reaproveitar a skill revisar-contra-a-spec do Módulo 15.
-->
