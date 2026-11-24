# Módulo 10: Arquitetura no SDD

Objetivo: estruturar o sistema que vai crescer, separando arquitetura geral de design por módulo, registrando decisões em ADRs, escolhendo um padrão que ajude o agente e definindo contratos e modelos de dados compartilhados.

## Por que este módulo existe

O Módulo 09 organizou **os documentos**. Agora o sistema tem equipes, notificações e relatórios. Se o código não tiver **fronteiras claras** e as decisões não estiverem registradas, cada tarefa do agente vai atravessar o sistema inteiro, e decisões antigas serão desfeitas sem querer.

**Sem este módulo**: uma mudança em um lugar quebra três. O agente "melhora" algo que foi decidido de propósito. Decisões são refeitas a cada semana por quem não sabe que já foram tomadas.

**Ganho real**: módulos isolados, em que cada tarefa toca **uma parte**, e decisões registradas em ADRs, que valem tanto para pessoas quanto para agentes.

## Aulas

| Aula | Pergunta que responde |
|---|---|
| [01 Arquitetura geral e design por módulo](Aula-01-Arquitetura-geral-e-design-por-modulo/) | O que vai em cada documento de arquitetura? |
| [02 ADRs](Aula-02-ADRs/) | Como registrar uma decisão para que ninguém a desfaça sem querer? |
| [03 Padrões de arquitetura](Aula-03-Padroes-de-arquitetura/) | Que estrutura de código ajuda o agente a acertar? |
| [04 Módulos com fronteiras claras](Aula-04-Modulos-com-fronteiras-claras/) | Como dividir para que cada tarefa toque uma parte isolada? |
| [05 Contratos e modelos de dados](Aula-05-Contratos-e-modelos-de-dados/) | Como evitar que tipos, validações e documentação divirjam? |

## Preparação

- `docs/` reorganizado (Módulo 09) e o MVP `v0.1.0`.

## Entregável do módulo

`docs/architecture/` com a arquitetura geral, um design por módulo, os ADRs das decisões principais e o código do gestor reorganizado em módulos com fronteiras verificadas.
