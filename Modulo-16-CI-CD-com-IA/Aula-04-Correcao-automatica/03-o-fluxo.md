# O fluxo da correção automática

Fluxo: CI falha → Log para o agente → Reproduz (Docker) → Corrige → Roda local → Novo commit no PR

- O agente recebe: **o log**, o **Taskfile** e o **diff** do PR.
- Reproduz com o **mesmo comando** do CI (Módulo 13).
- Corrige **só** o que o log aponta e roda a verificação.
- Envia o commit **para o mesmo PR**, e o pipeline roda de novo.

Quando o ambiente é igual, o agente **vê o mesmo erro** que o CI viu.

<!--
Mostrar como o Módulo 13 foi um alicerce: sem ambiente igual, essa automação não funciona.
-->
