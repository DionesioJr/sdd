# A linha de raciocínio do curso

Cada módulo existe porque o anterior deixou um problema aberto. Esta página mostra a cadeia inteira: **o que o aluno enfrenta, por que precisa do módulo e o que ganha de verdade**.

## A história em uma frase

A IA gera código plausível, não necessariamente correto. Para ela acertar, você precisa dizer o que é correto **antes** (spec), organizar isso conforme o projeto cresce, dar à IA só o contexto certo, verificar com testes e, por fim, deixar uma esteira de agentes fazer o trabalho com você no comando.

## Como toda aula é construída

Todas as aulas dos módulos 02 a 21 seguem a mesma sequência, para o aluno sempre saber **por que** está ali:

| Passo | Slide | Pergunta que responde |
|---|---|---|
| 1 | Capa | Onde estamos na jornada e o que vou saber ao final? |
| 2 | Sem isso | O que acontece comigo se eu não souber isto? |
| 3 | Conceito | Qual é a ideia, em poucas palavras? |
| 4 | O ganho real | O que muda, de forma concreta, antes e depois? |
| 5 | Exercício | Como eu sinto a diferença com as minhas mãos? |
| 6 | Resumo | O que levo, e por que a próxima aula vem agora? |

## Nível 1 · Fundamentos: a IA como ferramenta de trabalho

| Módulo | Problema que ele resolve | Sem ele | Ganho real |
|---|---|---|---|
| 01 Fundamentos de IA | "Por que a IA erra com tanta confiança?" | Você confia na IA como se ela entendesse, e descobre os erros em produção | Você prevê onde ela acerta e onde erra, e já sabe que precisa definir o correto antes |
| 02 Ambiente e ferramentas | Entender não basta: falta um lugar para trabalhar | Cada pessoa com um ambiente diferente, sem como desfazer um erro da IA | Agente funcionando, projeto versionado, qualquer estrago é reversível em um comando |
| 03 Trabalhando com o agente | O agente roda, mas as respostas variam e custam retrabalho | Pedidos vagos, código aceito sem leitura, conversas que só pioram | Pedidos que acertam de primeira, plano aprovado antes do código, sessões limpas |
| 04 Do vibe coding ao SDD | Pedir bem ainda não escala: o projeto cresce e a conversa se perde | O sistema "funciona" mas ninguém sabe por quê, e cada mudança quebra outra coisa | Você enxerga o ciclo do SDD e por que a spec vira a fonte da verdade |

## Nível 2 · Projeto pequeno: o ciclo completo do SDD

| Módulo | Problema que ele resolve | Sem ele | Ganho real |
|---|---|---|---|
| 05 Product Spec | A IA constrói o que você pediu, não o que você precisava | Retrabalho: você só percebe o mal-entendido com o sistema pronto | Requisitos e critérios de aceite que definem "pronto" antes do primeiro código |
| 06 Design | Mesmo com a spec, a IA inventa a arquitetura a cada pedido | Cada tarefa usa uma tecnologia e um padrão diferentes, o sistema vira uma colcha de retalhos | Decisões tomadas uma vez, por escrito, e seguidas por todas as tarefas |
| 07 Tarefas | Spec e design prontos, mas "implemente tudo" não funciona | O agente se perde, mistura assuntos e entrega algo grande demais para revisar | Tarefas pequenas, ordenadas e ligadas aos requisitos, que o agente acerta de primeira |
| 08 Implementação e verificação | Tarefas prontas: como executar sem perder o controle? | Código que parece certo, não tem teste e ninguém sabe se cumpre a spec | MVP entregue e provado contra a Product Spec, com a spec atualizada |

## Nível 3 · Projeto grande: organizar para escalar

| Módulo | Problema que ele resolve | Sem ele | Ganho real |
|---|---|---|---|
| 09 Organizando specs em escala | Um arquivo só não aguenta equipes, notificações e relatórios | Spec de mil linhas que ninguém lê, contradições e documentos desatualizados | Pastas por domínio, templates e glossário: achar, mudar e revisar sem medo |
| 10 Arquitetura no SDD | Com muitos módulos, o agente desfaz decisões e atravessa fronteiras | Mudança em um lugar quebra três; decisões antigas são refeitas toda semana | Módulos isolados e decisões registradas em ADRs que valem para pessoas e agentes |
| 11 Engenharia de contexto | O projeto cresceu: mais documentos, mais confusão no contexto | O agente recebe tudo e erra, ou recebe pouco e inventa | Cada tarefa recebe só o contexto certo, e as regras fixas vivem fora da spec |
| 12 Testes como contrato | "Parece funcionar" deixou de ser prova | Testes que a IA escreveu para passar, não para pegar defeitos | Cada requisito tem um teste que falha quando ele quebra, e você consegue medir isso |
| 13 Ambiente com Docker | "Na minha máquina funciona" trava pessoas, agentes e CI | Cada execução em um ambiente, falhas impossíveis de reproduzir | Um ambiente idêntico para pessoa, agente e pipeline |

## Nível 4 · Sistemas reais: estratégias, qualidade e entrega

| Módulo | Problema que ele resolve | Sem ele | Ganho real |
|---|---|---|---|
| 14 Estratégias | Quase nunca se começa do zero | Aplicar o ciclo completo para corrigir um bug, ou nenhum ciclo para mexer em sistema legado | A estratégia certa para cada situação: feature, bug, refatoração, sistema existente |
| 15 Qualidade e segurança | Código gerado também traz falhas e riscos | Vulnerabilidades, segredos vazados e pacotes falsos chegam à produção | Revisão sistemática e requisitos de segurança verificáveis |
| 16 CI/CD com IA | Qualidade que depende de lembrar não se sustenta | Verificação manual, PRs sem contexto, deploy com medo | Pipeline que barra o que está errado, liga PR à spec e entrega com observabilidade |

## Nível 5 · Tech Lead: desenvolvimento automatizado

| Módulo | Problema que ele resolve | Sem ele | Ganho real |
|---|---|---|---|
| 17 SDD como processo do time | O método funciona para você, mas e para o time? | Cada pessoa usa a IA do seu jeito, sem padrão, métrica nem orçamento | Papéis, portões, padrões compartilhados e métricas de resultado |
| 18 Ética, governança e carreira | Escalar a IA traz riscos legais e pessoais | Dados pessoais enviados sem critério, licenças ignoradas, autoria perdida | Uso da IA com rastreabilidade, conformidade e uma carreira com direção |
| 19 Desenvolvimento automatizado | Com processo e governança, falta tirar você do caminho crítico | Você vira o gargalo: cada tarefa espera por você | Specs e tarefas viram entrada de um fluxo com agentes, em paralelo e com você nas decisões |
| 20 Fábrica com Runtable | Orquestrar agentes à mão não se sustenta | Scripts soltos, sem auditoria, sem visão de custo e sem governança | Uma esteira que leva a tarefa da spec ao PR, com aprovação por risco e trilha de auditoria |

## Anexo · Guia de consulta

| Módulo | Problema que ele resolve | Sem ele | Ganho real |
|---|---|---|---|
| 21 Guia prático dos arquivos do SDD | Os documentos existem, mas ninguém sabe qual abrir em cada pedido | Arquivos criados e esquecidos, spec que deixa de ser verdade depois do MVP | Para MVP, feature e sustentação, você sabe quais arquivos criar, atualizar e em que ordem |

Pode ser feito logo após o Módulo 04 (visão geral) ou consultado a qualquer momento.

## O projeto que prova cada passo

O **gestor de tarefas web** cresce junto com o curso, então o aluno nunca aprende algo "no vazio":

Nível 1: experimentos → Nível 2: MVP → Nível 3: equipes, notificações e relatórios → Nível 4: features, bugs e produção → Nível 5: fábrica de agentes

## Perguntas para o aluno se fazer em cada aula

1. O que acontece se eu não souber isto?
2. Qual problema da aula anterior isto resolve?
3. O que muda, concretamente, no meu trabalho amanhã?
