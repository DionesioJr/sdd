# O fluxo de correção

Bug → Reproduzir → Causa → Esperado na spec → Teste falha → Correção → Teste passa

1. **Reproduzir**: passos exatos, dados, ambiente.
2. **Causa**: entender **por quê**, e não só onde.
3. **Esperado**: o que o sistema **deveria** fazer; registre na spec (ou critério).
4. **Teste que falha**: prova o bug.
5. **Correção mínima**.
6. **Teste passa**, e a suíte continua verde.

O teste que falhou antes e passa depois é a **prova** da correção.

<!--
Esse é o ciclo vermelho-verde do Módulo 08, aplicado a um defeito.
-->
