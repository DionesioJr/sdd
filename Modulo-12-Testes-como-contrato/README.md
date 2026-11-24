# Módulo 12: Testes como contrato

Objetivo: fazer os testes serem o **contrato** entre a spec e o código: requisitos escritos para virar testes, testes unitários e de integração que não mentem, ponta a ponta com Playwright, testes de mutação para medir sua força e uma matriz de rastreabilidade.

## Por que este módulo existe

"Parece funcionar" deixou de ser prova. O agente escreve código rápido, e também escreve testes rápido, mas testes que ele escreve **sozinho** costumam passar por construção: repetem o código, mockam tudo ou só cobrem o caminho feliz.

**Sem este módulo**: suíte verde que não pega defeito nenhum. Você descobre que os testes eram decorativos quando o bug chega a quem usa.

**Ganho real**: cada requisito tem um teste que **falha quando ele quebra**, você consegue **medir** se os testes pegam defeitos e sabe, a qualquer momento, o que está coberto.

## Aulas

| Aula | Pergunta que responde |
|---|---|
| [01 Spec testável](Aula-01-Spec-testavel/) | Como escrever requisitos que viram testes? |
| [02 Unitários e integração](Aula-02-Unitarios-e-integracao/) | Como pedir testes à IA sem gerar testes que mentem? |
| [03 Ponta a ponta](Aula-03-Ponta-a-ponta/) | Como validar os fluxos do usuário? |
| [04 Testes de mutação](Aula-04-Testes-de-mutacao/) | Como medir se os testes pegam defeitos? |
| [05 Matriz de rastreabilidade](Aula-05-Matriz-de-rastreabilidade/) | Como saber o que está coberto, por requisito? |

## Preparação

- O gestor com módulos (Módulo 10), `AGENTS.md` e guidelines (Módulo 11).
- Vitest instalado; Playwright será instalado na Aula 03.

## Entregável do módulo

Uma suíte de testes do gestor com nomes que citam os critérios, um teste ponta a ponta do fluxo principal, um relatório de mutação do domínio e uma matriz de rastreabilidade gerada por script.
