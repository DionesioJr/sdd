# O teste que só falha no CI

O E2E passa na sua máquina. No CI, falha. O agente, na máquina dele, não consegue reproduzir.

- Seu Node é 22; o do CI, 20.
- Seu navegador é uma versão; o do CI, outra.
- O agente instalou um pacote **global** que ninguém registrou.

Quarenta minutos depois, o problema era uma variável de ambiente.

- Como reproduzir exatamente o ambiente onde falhou?

<!--
Falhas que não se reproduzem custam muito tempo e contexto, humano e de agente.
-->
