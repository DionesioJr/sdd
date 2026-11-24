# A regra de dependência

Dependências **numa direção**, sem ciclos:

Fluxo: Relatórios → Notificações → Equipes → Tarefas

- Um módulo só depende dos que estão "abaixo".
- **Tarefas** não conhece Equipes nem Notificações.
- Se dois módulos precisam um do outro, falta um **terceiro** ou um **evento**.

Essa direção aparece no **mapa de módulos** da arquitetura geral.

<!--
Ciclos entre módulos indicam fronteiras mal desenhadas.
-->
