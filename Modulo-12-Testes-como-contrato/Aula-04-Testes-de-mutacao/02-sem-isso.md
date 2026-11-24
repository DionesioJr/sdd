# 90% de cobertura, e o bug passou

A ferramenta diz: **90% do código foi executado pelos testes**.

Mas "executado" não é "verificado". Um teste pode rodar a linha e **não conferir nada** dela.

- Se eu trocar `>` por `>=` no código, algum teste falha?
- Se eu apagar uma linha, algum teste falha?

Cobertura mede **o que rodou**. Não mede **o que foi conferido**.

<!--
A cobertura de linhas é um número fácil de inflar, principalmente com testes gerados por IA.
-->
