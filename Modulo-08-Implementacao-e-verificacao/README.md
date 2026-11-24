# Módulo 08: Implementação e verificação

Objetivo: implementar o MVP tarefa por tarefa, com Taskfile, contexto mínimo, testes derivados dos critérios de aceite e commits pequenos, e fechar validando contra a Product Spec.

## Por que este módulo existe

Você tem spec, design e plano aprovados. Falta executar sem perder o controle. Aqui o método prova seu valor: o agente recebe uma tarefa precisa, com o contexto certo, e o resultado é conferido contra critérios que você escreveu antes.

**Sem este módulo**: o código parece certo, não tem teste, e ninguém sabe se cumpre a spec. Ou o agente erra e você corrige só o código, deixando a causa (documento ruim) intacta.

**Ganho real**: um MVP entregue e **provado** contra a Product Spec, com testes que nascem dos critérios, histórico limpo e uma spec atualizada com o que aprendemos.

## Aulas

| Aula | Pergunta que responde |
|---|---|
| [01 Taskfile e contexto](Aula-01-Taskfile-e-contexto/) | O que o agente precisa receber em cada tarefa? |
| [02 Ciclo da tarefa](Aula-02-Ciclo-da-tarefa/) | Qual é o passo a passo de uma tarefa, do início ao commit? |
| [03 Testes a partir dos critérios](Aula-03-Testes-a-partir-dos-criterios/) | Como cada critério de aceite vira um teste? |
| [04 Quando o agente erra](Aula-04-Quando-o-agente-erra/) | Qual é a causa do erro e onde corrigi-la? |
| [05 Fechamento do MVP](Aula-05-Fechamento-do-MVP/) | O MVP cumpre a spec, e a spec reflete o que foi feito? |

## Preparação

- `docs/requirements.md`, `docs/design.md` e `docs/tasks.md` aprovados.
- Node, Git e o Pi funcionando.

## Entregável do módulo

O MVP do gestor de tarefas, implementado, testado e validado contra a Product Spec, com a spec atualizada e a versão `v0.1.0` marcada no Git.
