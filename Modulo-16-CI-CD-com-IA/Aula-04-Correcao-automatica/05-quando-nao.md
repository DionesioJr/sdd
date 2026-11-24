# Quando não deixar

Deixe uma pessoa decidir quando:

- o teste falha porque **o requisito mudou** (é spec, não código);
- a falha é de **segurança** (autorização, segredos);
- é **migração** de dados ou mudança de contrato;
- **falhou duas vezes** pelo mesmo motivo (o diagnóstico está errado);
- o log aponta **ambiente** (Docker, rede, variáveis).

A correção automática é para **erros mecânicos**: tipos, lint, importação, teste simples. Para decisões, **humano**.

<!--
Reforçar a diferença entre erro mecânico e decisão.
-->
