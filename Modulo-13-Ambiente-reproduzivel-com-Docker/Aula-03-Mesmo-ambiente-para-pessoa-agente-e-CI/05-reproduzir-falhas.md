# Reproduzir uma falha do CI

Quando o CI falha:

1. Veja o comando que falhou.
2. Rode **o mesmo** comando (`npm run test:docker`).
3. Falha igual? Depure.
4. Não reproduziu? A diferença é **ambiente**: compare versões, variáveis e dados.

Para dar **contexto ao agente**: *"O CI falhou com este log. Reproduza com `npm run test:docker` e corrija."*

Se o ambiente é o mesmo, o agente **vê o mesmo erro**.

<!--
Esse é o fundamento da correção automática de CI (Módulo 16).
-->
