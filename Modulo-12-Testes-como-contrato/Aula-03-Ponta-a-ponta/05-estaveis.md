# Testes estáveis

Testes E2E instáveis (às vezes passam, às vezes falham) corroem a confiança.

- **Sem pausas fixas**: use as esperas do próprio Playwright.
- **Dados controlados**: cada teste cria o que precisa e **limpa** depois.
- **Independentes**: um teste não depende de outro.
- **Rodam sempre no mesmo ambiente** (Módulo 13: Docker).

Pedir ao agente: *"Escreva o teste E2E do fluxo X. Sem sleeps fixos, com dados próprios, localizando por papel."*

<!--
Um teste instável deve ser corrigido ou removido. Nunca "rodar de novo até passar".
-->
