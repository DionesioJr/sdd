# `requirements.md`: o quê e para quem

```md
# Requisitos: Gestor de Tarefas
Status: Aprovado · Versão 1

## 1. Problema
Equipes pequenas perdem prazos: as tarefas vivem em
mensagens e planilhas.

## 2. Usuários
Líder de equipe e membros (até 10 pessoas).

## 3. Requisitos funcionais
### RF-01 Criar tarefa  (MVP)
O usuário cria uma tarefa com título, prazo e prioridade.
**Critérios de aceite**
- CA-01.1: título preenchido e salvar → a tarefa aparece na lista.
- CA-01.2: título vazio → recusa com "Título é obrigatório".

## 4. Requisitos não funcionais
- RNF-01: listar 500 tarefas em menos de 1 segundo.

## 5. Fora do escopo
- Login, notificações, anexos.
```

**Use em**: toda etapa. É a referência do que é "correto". **Não coloque**: tecnologia nem telas detalhadas.

<!--
Cada critério vira um teste. Os IDs (RF-01, CA-01.1) são o que liga os outros arquivos a este.
-->
