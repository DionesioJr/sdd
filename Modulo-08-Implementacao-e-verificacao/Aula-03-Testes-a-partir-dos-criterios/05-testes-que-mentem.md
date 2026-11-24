# Testes que mentem

Cuidado com:

- teste que **repete a implementação** (mesma fórmula nos dois lados);
- teste sem **asserção** ou com `expect(true)`;
- tudo **mockado**: não testa nada real;
- critério coberto só no **caminho feliz**.

Pergunta de controle: *"se eu quebrar o código de propósito, este teste falha?"*

<!--
Prepara o Módulo 12: testes de mutação respondem a essa pergunta de forma sistemática.
-->
