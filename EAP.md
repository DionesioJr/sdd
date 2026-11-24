# EAP: Desenvolvimento de Software com IA

Estrutura analítica do curso: níveis → módulos → aulas → assuntos.

## Premissas

- **Foco**: o método. Desenvolvimento orientado a spec (SDD) para que a IA construa software de forma organizada e automatizada, de projetos simples a projetos grandes.
- **Progressão**: do iniciante ao tech lead. A escala do projeto cresce junto: projeto pequeno → projeto grande → fábrica automatizada.
- **Domínio**: desenvolvimento web com TypeScript.
- **Ferramenta**: agente **Pi** com modelos via **OpenRouter**. O método vale para qualquer agente.
- **Infraestrutura**: Docker.
- **Dinâmica**: toda aula tem teoria curta e exercício prático.
- **Material**: escrito, um arquivo Markdown por slide.
- **Sem avaliação final**: o curso é uma sequência de módulos.
- **Fora do escopo**: construir sistemas que usam IA (RAG, agentes de produto, frameworks de LLM). Isso fica para um curso próprio.

## Projeto que atravessa o curso

Um **gestor de tarefas web** que cresce junto com o método:

| Nível | Escala | O projeto ganha |
|---|---|---|
| 1 Fundamentos | Sem estrutura ainda | Primeiros experimentos com o agente |
| 2 Projeto pequeno | 1 arquivo por tipo de documento | Spec, design, tarefas, MVP implementado e testado |
| 3 Projeto grande | Pastas por domínio e módulo | Novos domínios (equipes, notificações, relatórios), arquitetura e contexto organizados |
| 4 Sistemas reais | Projeto vivo | Features, bugs, refatorações, CI/CD e produção |
| 5 Fábrica | Time + agentes | Desenvolvido por uma esteira de agentes no Runtable |

## Documentos que o aluno aprende a produzir

| Documento | Responde | Escala |
|---|---|---|
| Product Spec | O quê e para quem | 1 arquivo → 1 pasta por domínio |
| Design / Tech Spec | Como será construído | 1 arquivo → arquitetura geral + 1 por módulo |
| ADR | Por que decidimos assim | 1 arquivo por decisão |
| Tarefas | O que fazer agora | 1 lista → specs numeradas por épico e sprint |
| Taskfile | Como executar esta tarefa | 1 por tarefa |
| AGENTS.md + guidelines + skills | O que o agente precisa saber | Raiz enxuta + arquivos carregados sob demanda |

```
Projeto pequeno              Projeto grande
docs/                        docs/
├── requirements.md          ├── product/
├── design.md                │   ├── 00-visao.md
└── tasks.md                 │   ├── tarefas.md
                             │   └── equipes.md
                             ├── architecture/
                             │   ├── 00-arquitetura-geral.md
                             │   ├── adr/
                             │   └── modules/
                             ├── tasks/
                             │   └── epic-01-equipes/
                             │       ├── 01-modelo-de-dados.md
                             │       └── 02-api-de-convites.md
                             └── guidelines/
```

## Árvore

```
Curso
├── Nível 1 · Fundamentos: a IA como ferramenta de trabalho
│   ├── Modulo-01-Fundamentos-de-IA-para-devs
│   ├── Modulo-02-Ambiente-e-ferramentas
│   ├── Modulo-03-Trabalhando-com-o-agente
│   └── Modulo-04-Do-vibe-coding-ao-SDD
├── Nível 2 · Projeto pequeno: o ciclo completo do SDD
│   ├── Modulo-05-Product-Spec
│   ├── Modulo-06-Design
│   ├── Modulo-07-Tarefas
│   └── Modulo-08-Implementacao-e-verificacao
├── Nível 3 · Projeto grande: organizar para escalar
│   ├── Modulo-09-Organizando-specs-em-escala
│   ├── Modulo-10-Arquitetura-no-SDD
│   ├── Modulo-11-Engenharia-de-contexto
│   ├── Modulo-12-Testes-como-contrato
│   └── Modulo-13-Ambiente-reproduzivel-com-Docker
├── Nível 4 · Sistemas reais: estratégias, qualidade e entrega
│   ├── Modulo-14-Estrategias-de-desenvolvimento
│   ├── Modulo-15-Qualidade-e-seguranca
│   └── Modulo-16-CI-CD-com-IA
└── Nível 5 · Tech Lead: desenvolvimento automatizado
    ├── Modulo-17-SDD-como-processo-do-time
    ├── Modulo-18-Etica-governanca-e-carreira
    ├── Modulo-19-Desenvolvimento-automatizado
    └── Modulo-20-Fabrica-de-software-com-Runtable

Anexo · Guia de consulta (pode ser feito logo após o Módulo 04)
└── Modulo-21-Guia-pratico-dos-arquivos-do-SDD
```

---

## Nível 1 · Fundamentos: a IA como ferramenta de trabalho

### Módulo 01: Fundamentos de IA para devs

1. **O que é um LLM**: previsão de tokens e por que parece que "entende".
2. **Contexto**: janela de contexto, tokens, por que o modelo esquece ou se confunde.
3. **Limites**: alucinação, não determinismo, data de corte.
4. **Modelos e custo**: OpenRouter, preço por token, modelo grande vs. pequeno; o que nunca enviar ao modelo.

### Módulo 02: Ambiente e ferramentas

1. **Ambiente**: terminal, Node.js, TypeScript, VS Code.
2. **Pi + OpenRouter**: instalação, chave, escolha de modelo, primeira sessão.
3. **Git essencial**: repositório, commit, branch, voltar atrás.
4. **Ecossistema de SDD**: Spec Kit, Kiro, OpenSpec e outros; o que todos têm em comum.

### Módulo 03: Trabalhando com o agente

1. **Pedir bem**: objetivo, contexto, restrições, formato.
2. **Planejar antes de codar**: pedir um plano, discordar, ajustar.
3. **Ler o código gerado**: nunca aceitar o que não entende.
4. **Iterar e recomeçar**: feedback preciso, quando abrir uma sessão nova.

### Módulo 04: Do vibe coding ao SDD

1. **O limite do pedido solto**: o mesmo sistema feito sem spec e com spec.
2. **O ciclo do SDD**: especificar → projetar → quebrar em tarefas → implementar → verificar → entregar.
3. **Anatomia dos documentos**: o papel de cada um e como se ligam.
4. **A spec como fonte da verdade**: o código segue a spec, e a spec muda antes do código.

## Nível 2 · Projeto pequeno: o ciclo completo do SDD

### Módulo 05: Product Spec

1. **Da ideia bruta ao problema**: a IA como entrevistadora, usuários, objetivos.
2. **Requisitos**: funcionais, não funcionais e o que fica fora.
3. **Critérios de aceite**: verificáveis, EARS, Dado/Quando/Então.
4. **Escopo**: MVP vs. futuro, quando fazer uma PoC.
5. **Revisão crítica**: achar ambiguidades, contradições e lacunas com a IA.
6. **Modelo de documento**: `requirements.md` do projeto.

### Módulo 06: Design

1. **Stack e restrições**: escolher e registrar o porquê.
2. **Componentes e modelo de dados**: o suficiente para começar.
3. **Contrato de API**: endpoints, entradas, saídas e erros.
4. **Modelo de documento**: `design.md` do projeto e a aprovação antes de codar.

### Módulo 07: Tarefas

1. **Quebrar o design**: tarefas do tamanho que o agente acerta de primeira.
2. **Rastreabilidade**: cada tarefa ligada a um requisito e a um critério de aceite.
3. **Dependências e ordem**: o que precisa vir antes.
4. **Modelo de documento**: `tasks.md` do projeto.

### Módulo 08: Implementação e verificação

1. **Taskfile e contexto**: descrever a tarefa e injetar só o necessário.
2. **Ciclo da tarefa**: plano → código → teste → commit pequeno.
3. **Testes a partir dos critérios**: cada critério de aceite vira teste.
4. **Quando o agente erra**: falta de contexto, tarefa grande ou spec ambígua.
5. **Fechamento**: validar o MVP contra a Product Spec e atualizar a spec com o que mudou.

## Nível 3 · Projeto grande: organizar para escalar

### Módulo 09: Organizando specs em escala

1. **Quando um arquivo não basta**: sinais de que a spec precisa virar pasta.
2. **Estrutura de pastas**: por domínio e por módulo; visão geral e índice.
3. **Numeração e agrupamento**: specs numeradas, épicos e sprints.
4. **Modelos padronizados**: templates para cada tipo de documento.
5. **Glossário e linguagem comum**: o mesmo termo em spec, código e conversa com o agente.
6. **Spec viva e versionada**: mudanças, histórico, quem aprova; spec no repositório vs. em ferramenta.

### Módulo 10: Arquitetura no SDD

1. **Arquitetura geral + design por módulo**: o que vai em cada documento.
2. **ADRs**: registrar decisões para que pessoas e agentes não as desfaçam.
3. **Padrões de arquitetura**: camadas, clean/hexagonal, monolito modular; o que ajuda o agente a acertar.
4. **Módulos com fronteiras claras**: dividir para que cada tarefa toque uma parte isolada.
5. **Contratos e modelos de dados**: OpenAPI, schemas com Zod, tipos compartilhados.

### Módulo 11: Engenharia de contexto

1. **O que o agente vê**: contexto mínimo, certo e excessivo.
2. **AGENTS.md**: curto, de alto sinal, sem duplicar a spec.
3. **Guidelines sob demanda**: convenções em arquivos separados, carregados quando a tarefa pede.
4. **Skills**: empacotar procedimentos repetitivos (criar endpoint, criar teste, criar spec).
5. **Qual parte da spec entra em cada tarefa**: ligar o taskfile aos documentos certos.

### Módulo 12: Testes como contrato

1. **Spec testável**: escrever requisitos que viram testes.
2. **Unitários e integração**: pedir testes à IA sem gerar testes que mentem.
3. **Ponta a ponta**: Playwright validando os fluxos da Product Spec.
4. **Testes de mutação**: medir se os testes pegam defeitos.
5. **Matriz de rastreabilidade**: requisito → critério → teste.

### Módulo 13: Ambiente reproduzível com Docker

1. **Containers e Dockerfile**.
2. **Docker Compose**: aplicação, banco e serviços.
3. **Mesmo ambiente para pessoa, agente e CI**.

## Nível 4 · Sistemas reais: estratégias, qualidade e entrega

### Módulo 14: Estratégias de desenvolvimento

1. **Greenfield**: todas as fases, spec completa antes do código.
2. **Brownfield**: analisar o sistema existente, spec reversa, nova spec respeitando o que existe.
3. **Feature**: requisitos só da funcionalidade, design só dos componentes afetados.
4. **Correção de bug**: reproduzir, registrar o esperado na spec, teste que falha antes e passa depois.
5. **Refatoração**: spec do que melhora e do que não pode mudar.
6. **PoC → MVP → produto**: o que descartar, o que evoluir.
7. **Modelos por estratégia**: um template de spec para cada caso.

### Módulo 15: Qualidade e segurança

1. **Revisão de código gerado**: checklist e IA como segunda revisora.
2. **Riscos do código gerado**: OWASP, segredos, dependências alucinadas.
3. **Segurança do agente**: permissões, sandbox, injeção de prompt.
4. **Requisitos não funcionais na spec**: segurança, desempenho e acessibilidade como critérios verificáveis.

### Módulo 16: CI/CD com IA

1. **Pipeline com portões**: lint, tipos, testes, varredura de segurança.
2. **PR ligado à spec**: descrição gerada, requisito e tarefa rastreados.
3. **Revisão automática**: IA revisando PRs e os limites disso.
4. **Correção automática**: agente que corrige o CI quebrado e quando não deixar.
5. **Deploy e observabilidade**: publicação com Docker, logs e o retorno da produção para a spec.

## Nível 5 · Tech Lead: desenvolvimento automatizado

### Módulo 17: SDD como processo do time

1. **Papéis**: quem escreve, revisa e aprova cada documento.
2. **Portões de aprovação**: o que precisa estar pronto antes de cada fase.
3. **Padrões compartilhados**: templates, AGENTS.md, guidelines e skills do time.
4. **Métricas**: retrabalho, tarefas aceitas de primeira, DORA.
5. **Custo**: orçamento de tokens e modelo certo para cada tarefa.

### Módulo 18: Ética, governança e carreira

1. **Propriedade intelectual e licenças**.
2. **Privacidade e LGPD**: o que pode ir para um provedor de IA.
3. **Responsabilidade e rastreabilidade**: o que foi feito por IA e o que foi feito por pessoa.
4. **Carreira**: o papel do desenvolvedor daqui para frente.

### Módulo 19: Desenvolvimento automatizado

1. **Da spec à execução**: specs e tarefas como entrada de um fluxo automático.
2. **Agentes especialistas**: implementar, revisar e testar como etapas separadas.
3. **Execução em paralelo**: worktrees isoladas e tarefas independentes.
4. **Humano no circuito**: onde a pessoa aprova e onde o agente segue sozinho.
5. **Limites**: rodadas, custo e risco.

### Módulo 20: Fábrica de software com Runtable

1. **A esteira**: workflow em colunas com agentes presos a cada etapa.
2. **Máquina executora**: `rtb auth login`, vincular o projeto, `rtb serve`.
3. **Da tarefa ao PR**: execução isolada, entrega com CI verde.
4. **Planejamento por IA**: proposta gerada pela IA e aprovada por pessoa.
5. **Governança**: aprovação por risco, dossiê da tarefa, trilha de auditoria.
6. **No projeto**: o gestor de tarefas evoluindo dentro da fábrica, da spec ao PR.

## Anexo · Guia de consulta

### Módulo 21: Guia prático dos arquivos do SDD

1. **Os arquivos do SDD na prática**: SDD e spec em uma frase, o que vai em cada arquivo (`requirements.md`, `design.md`, ADR, `tasks.md`, Taskfile, `AGENTS.md`), qual arquivo usar em cada etapa de um MVP do zero, de uma nova feature e da sustentação (bugs e ajustes), com prompts e exemplos de conteúdo.
