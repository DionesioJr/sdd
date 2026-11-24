# Testes de caracterização

Antes de mudar, **trave o comportamento atual** com testes:

- Eles não dizem "está certo"; dizem **"é assim hoje"**.
- Se a mudança quebrar um deles, você **sabe** o que mudou.
- Se mudou de propósito, atualize o teste **e a spec**.

Fluxo: Comportamento atual → Teste de caracterização → Mudança → Testes ainda passam?

Esses testes são a **rede de segurança** para o agente mexer num código que ninguém entende por completo.

<!--
Este conceito reaparece na Refatoração (Aula 05).
-->
