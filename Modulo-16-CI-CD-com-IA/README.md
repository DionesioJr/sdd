# Módulo 16: CI/CD com IA

Objetivo: automatizar os portões de qualidade num pipeline, ligar cada PR à spec, usar IA para revisar e corrigir o CI com limites claros, e fechar o ciclo com deploy e observabilidade.

## Por que este módulo existe

Testes, matriz, fronteiras, varredura de segurança e revisão só protegem se rodarem **sempre**. Qualidade que depende de alguém **lembrar** de rodar não se sustenta, especialmente quando o agente entrega vários PRs por dia.

**Sem este módulo**: verificação manual, PRs sem contexto, deploys com medo e nenhuma resposta para "o que foi para produção e por quê?".

**Ganho real**: um pipeline que **barra** o que está errado, PRs que apontam para a spec, revisão e correção assistidas por IA dentro de limites e produção que **devolve informação** à spec.

## Aulas

| Aula | Pergunta que responde |
|---|---|
| [01 Pipeline com portões](Aula-01-Pipeline-com-portoes/) | Como garantir que nada passe sem as verificações? |
| [02 PR ligado à spec](Aula-02-PR-ligado-a-spec/) | Como cada PR mostra o que atende? |
| [03 Revisão automática](Aula-03-Revisao-automatica/) | Como a IA ajuda a revisar PRs, e onde ela para? |
| [04 Correção automática](Aula-04-Correcao-automatica/) | Quando o agente pode consertar o CI sozinho? |
| [05 Deploy e observabilidade](Aula-05-Deploy-e-observabilidade/) | Como publicar e trazer a produção de volta à spec? |

## Preparação

- Repositório no GitHub (ou plataforma equivalente) com o gestor, Docker e testes.
- Os exemplos usam GitHub Actions; os conceitos valem para qualquer CI.

## Entregável do módulo

Um pipeline que roda tipos, testes, fronteiras, matriz e segurança; um template de PR ligado à spec; uma revisão automática por IA; uma regra de correção automática com limites; e um deploy com logs e rollback.
