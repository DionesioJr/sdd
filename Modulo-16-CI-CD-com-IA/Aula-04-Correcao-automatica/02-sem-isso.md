# O CI vermelho de madrugada

O pipeline quebrou por um erro de tipo trivial. O PR fica parado até alguém acordar, ler o log e corrigir.

Por outro lado, se o agente **corrigir tudo sozinho**:

- altera o teste para passar;
- desabilita a verificação que falhava;
- mexe em arquivos que nada tinham a ver.

Rápido, mas **perigoso**.

<!--
A correção automática é muito útil para falhas simples, mas exige limites.
-->
