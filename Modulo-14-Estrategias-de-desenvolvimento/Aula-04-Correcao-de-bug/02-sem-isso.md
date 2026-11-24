# O bug que volta

Alguém reporta: *"tarefas que vencem hoje aparecem como atrasadas."*

O agente muda um `<` para `<=` e diz *"corrigido"*. Você aceita.

- Não houve **reprodução**.
- Não houve **teste**.
- Dois meses depois, uma refatoração desfaz a correção, e o bug volta.

<!--
Correção sem teste é correção temporária.
-->
