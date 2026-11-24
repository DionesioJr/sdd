# OpenAPI: o contrato da API

**OpenAPI** descreve a API (caminhos, entradas, saídas, erros) num arquivo padrão.

- Serve de **documentação** que não envelhece.
- Gera **clientes** e **mocks** para o frontend.
- Valida **respostas reais** nos testes (o contrato vira teste).

Existem bibliotecas que **geram o OpenAPI a partir dos schemas Zod**, e o contrato também vem da mesma fonte.

O OpenAPI **não substitui** o design do módulo: ele é a forma **executável** dele.

<!--
Não precisamos nomear uma biblioteca específica de geração: as opções mudam. O princípio é a fonte única.
-->
