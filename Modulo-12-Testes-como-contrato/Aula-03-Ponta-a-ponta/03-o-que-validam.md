# O que testes E2E validam

Ponta a ponta: um navegador real percorre **os fluxos da Product Spec**.

| Critério (Dado/Quando/Então) | Teste E2E |
|---|---|
| Dado uma tarefa pendente | Cria a tarefa pela tela |
| Quando o usuário a conclui | Clica em "Concluir" |
| Então aparece como concluída | Verifica o texto e o estado |

São **lentos e frágeis**: use **poucos**, só para os fluxos **essenciais** (criar, concluir, convidar).

<!--
Playwright. Ligar o formato Dado/Quando/Então do Módulo 05 aos passos do teste.
-->
