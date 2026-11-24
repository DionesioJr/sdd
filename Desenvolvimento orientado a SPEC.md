# Desenvolvimento orientado a SPEC

**Spec-Driven Development com IA**

Seis fases para a IA construir software de forma previsível, do projeto pequeno ao grande.

Ciclo: Especificação → Arquitetura → Tarefas → Implementação → Testes → Deploy

---

## Fase 1 · Especificação

*Quem e o quê*

Fluxo: Ideia bruta → Refinamento com IA → Product Spec

- **Ideia bruta**: o problema como chegou, incompleto.
- **Refinamento**: a IA pergunta o que falta.
- **Product Spec**: a referência do que é "correto".

---

## Fase 2 · Arquitetura

*Como será construído*

### 1. Stack tecnológica

- Linguagem
- Frameworks
- Infraestrutura

### 2. Componentes

- Módulos
- Serviços
- Integrações

### 3. Decisões de design

- Padrões
- Contrato de API
- Modelos de dados

### 4. Tech Spec aprovada

- Documentos validados antes de codar

---

## Fase 3 · Tarefas

*O que fazer agora*

Fluxo: Tech Spec → Tarefas pequenas → Fila priorizada

- Quebrar a Tech Spec em tarefas pequenas
- Ligar cada tarefa a um requisito da Product Spec
- Definir critérios de aceite por tarefa
- Mapear dependências entre tarefas
- Priorizar e ordenar a execução

---

## Fase 4 · Implementação

*Construindo com precisão*

### 1. Taskfile

- Descrição precisa da tarefa

### 2. Contexto injetado

- Spec
- Arquitetura
- Código existente

### 3. Código gerado

- Alinhado com a spec
- Revisável

### 4. Entrega da tarefa

- Commits pequenos e rastreáveis
- Revisão de código
- Spec atualizada quando algo mudar

---

## Fase 5 · Testes e validação

*Verificar e garantir*

Fluxo: Unitários → Integração → Ponta a ponta → Critérios de aceite

- **Unitários**: cada peça faz o que a spec diz.
- **Integração**: as peças funcionam juntas.
- **Ponta a ponta**: o fluxo do usuário funciona.
- **Aceite**: valida contra a Product Spec.

---

## Fase 6 · Deploy

*Entregar e evoluir*

Fluxo: CI/CD → Produção → Monitoramento → Feedback

- Pipeline de entrega (CI/CD)
- Publicação em produção
- Monitoramento e logs
- Feedback dos usuários e novas ideias

**Ciclo**: o feedback vira uma nova ideia e volta à Fase 1.

---

## Estratégias · começar ou evoluir

*Projeto novo ou sistema que já existe*

### Greenfield

Ideia → Spec → Design → Código

- Projeto novo, sem código.
- Percorre as Fases 1 a 6.
- A spec nasce antes do código.

### Brownfield

Sistema → Análise → Nova spec → Código

- Evolução de um sistema existente.
- Analisar o código atual antes da spec.
- A spec respeita o que já existe.

---

## Estratégias · mudanças pontuais

*Funcionalidade, bug ou estrutura*

### Feature

Requisitos → Design parcial → Código

- Só a nova funcionalidade.
- Design só do que é afetado.

### Correção de bug

Bug → Causa → Spec → Correção

- Spec registra o esperado.
- Teste falha antes, passa depois.

### Refatoração

Análise → Spec → Ajuste interno

- Comportamento externo não muda.
- Testes passam antes e depois.

---

## Estratégias · do experimento ao produto

*Validar antes de construir*

### Prova de conceito (PoC)

PoC → MVP → Produto

- Responde uma pergunta: "é viável?"
- Constrói o mínimo para responder.
- Não vai para produção sem spec.

### MVP

Requisitos → Essencial → Fases 2 a 6

- Menor versão que entrega valor.
- **Essencial** entra; **futuro** vai ao backlog.

---

## Escala de projetos

*A mesma estrutura, organizada de outro jeito*

| | Projeto pequeno | Projeto grande |
|---|---|---|
| **Requisitos** | 1 arquivo de requirements | 1 pasta, um arquivo por módulo ou domínio |
| **Design** | 1 arquivo de design | 1 arquitetura geral + 1 design por módulo |
| **Tarefas** | 1 arquivo com poucas tasks | Specs numeradas (`01-nome.md`) em épicos e sprints |
