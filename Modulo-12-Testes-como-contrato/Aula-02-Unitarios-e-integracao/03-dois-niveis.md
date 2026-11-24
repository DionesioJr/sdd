# Dois níveis

| | Unitário | Integração |
|---|---|---|
| Testa | Uma **regra** isolada (domínio) | Partes **juntas** (API + banco) |
| Velocidade | Milissegundos | Segundos |
| Dependências | Nenhuma (puro) | Reais ou próximas das reais |
| Acha | Erros de lógica | Erros de ligação, dados, SQL |

Proporção típica: **muitos unitários, alguns de integração, poucos ponta a ponta**.

Unitário **sem** integração deixa passar erros de ligação; integração **sem** unitários é lenta de depurar.

<!--
A pirâmide de testes. Não é dogma, e sim um guia de custo e benefício.
-->
