# Duas camadas de design

### Arquitetura geral

O que vale para **o sistema todo**: módulos, como se comunicam, stack, princípios, decisões transversais.

Muda **raramente**, com ADR.

### Design de módulo

O que vale para **um módulo**: dados, API, regras, erros, casos de borda.

Muda **com cada feature** do módulo.

Quem trabalha num módulo lê a arquitetura geral (curta) e **só** o design do seu módulo.

<!--
Mostrar a estrutura do EAP: architecture/00-arquitetura-geral.md e architecture/modules/<modulo>.md.
-->
