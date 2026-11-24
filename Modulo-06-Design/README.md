# Módulo 06: Design

Objetivo: decidir **como** o gestor de tarefas será construído (stack, componentes, modelo de dados e contrato de API) e registrar isso em `design.md`, aprovado antes de codar.

## Por que este módulo existe

A Product Spec diz **o quê**. Mas ela não diz em que tecnologia, com quais componentes, em que formato os dados trafegam. Se você não decidir, o agente decide, **de novo a cada tarefa**.

**Sem este módulo**: uma tarefa usa uma biblioteca de datas, outra usa outra; um endpoint devolve erro de um jeito, outro de outro. O sistema vira uma colcha de retalhos que funciona, mas ninguém consegue evoluir.

**Ganho real**: decisões tomadas **uma vez**, por escrito, e seguidas por todas as tarefas, sessões e agentes.

## Aulas

| Aula | Pergunta que responde |
|---|---|
| [01 Stack e restrições](Aula-01-Stack-e-restricoes/) | Que tecnologias usar e por quê? |
| [02 Componentes e modelo de dados](Aula-02-Componentes-e-modelo-de-dados/) | Quais são as peças e que dados existem? |
| [03 Contrato de API](Aula-03-Contrato-de-API/) | Como as peças conversam entre si? |
| [04 Modelo de documento](Aula-04-Modelo-de-documento/) | Qual é o formato do `design.md` e quando ele está aprovado? |

## Preparação

- `docs/requirements.md` aprovado (Módulo 05).

## Entregável do módulo

`docs/design.md` do gestor de tarefas, aprovado, cobrindo todos os requisitos do MVP.
