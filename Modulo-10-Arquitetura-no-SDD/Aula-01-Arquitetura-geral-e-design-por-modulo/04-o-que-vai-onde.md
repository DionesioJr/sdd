# O que vai em cada um

| Arquitetura geral | Design de módulo |
|---|---|
| Mapa de módulos e dependências | Entidades e campos do módulo |
| Stack e versões | Endpoints e contratos |
| Princípios (ex.: dependências em uma direção) | Regras de negócio do módulo |
| Padrões transversais (erros, logs, auth) | Casos de borda |
| Links para os ADRs | Testes esperados |

Regra de ouro: **se vale para mais de um módulo, sobe; se só para um, desce.**

<!--
Dica: uma pergunta ajuda a decidir: "outro módulo precisa saber disso?" Se sim, é arquitetura geral.
-->
