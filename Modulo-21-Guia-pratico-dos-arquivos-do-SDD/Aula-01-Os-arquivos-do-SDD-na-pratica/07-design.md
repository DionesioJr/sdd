# `design.md`: como será construído

```md
# Design: Gestor de Tarefas
Status: Aprovado · Versão 1 · Atende: requirements.md v1

## 1. Restrições
Equipe de uma pessoa, sem servidor dedicado.

## 2. Stack (com o porquê)
TypeScript + Node + SQLite: roda sem infraestrutura (ADR 0001).

## 3. Componentes
api/ (rotas) · dominio/ (regras) · repositorio/ (dados)

## 4. Modelo de dados
Tarefa: id, titulo (até 120), prazo, prioridade, status

## 5. Contrato de API
POST /tarefas → 201 {id, titulo, ...} | 400 {erro}

## 6. Cobertura dos requisitos
RF-01 → modelo Tarefa, POST /tarefas, dominio/validar
```

**Use em**: ao criar as tarefas e ao escrever cada Taskfile. **Não coloque**: o que o sistema faz (isso é do `requirements.md`).

<!--
A seção Cobertura é o elo com os requisitos: todo RF do MVP precisa aparecer nela.
-->
