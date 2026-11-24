# Como trabalhar sem expor dados

| Prática | Como |
|---|---|
| **Dados sintéticos** | Fixtures e bancos de teste fictícios (nunca cópia de produção) |
| **Anonimização** | Troque identificadores por valores falsos antes de enviar |
| **Sem produção no contexto** | Agentes não têm acesso a bancos nem logs reais |
| **Logs sem dado pessoal** | Registre IDs, e não nomes nem CPFs |
| **Escolha de provedor** | Com acordos, retenção mínima e região adequada |

Regra do curso: **dado de produção não entra em prompt**.

<!--
Combinar com o Módulo 15: o agente não deve ter acesso a credenciais de produção.
-->
