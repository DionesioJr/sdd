# Módulo 11: Engenharia de contexto

Objetivo: controlar o que o agente enxerga em cada tarefa: `AGENTS.md` enxuto, guidelines carregadas sob demanda, skills para procedimentos repetitivos e a ligação entre cada tarefa e os documentos certos.

## Por que este módulo existe

O projeto cresceu: dezenas de documentos, convenções, decisões e procedimentos. Se o agente recebe **tudo**, ele se perde e o custo explode. Se recebe **pouco**, ele inventa. O Módulo 01 já mostrou que contexto demais piora a resposta; agora é preciso **projetá-lo**.

**Sem este módulo**: o agente repete os mesmos erros a cada sessão, o `AGENTS.md` vira um depósito de 800 linhas, e os mesmos pedidos longos são colados à mão dezenas de vezes.

**Ganho real**: cada tarefa recebe **só o contexto certo**, as regras fixas ficam fora da spec e os procedimentos repetitivos viram comandos reutilizáveis.

## Aulas

| Aula | Pergunta que responde |
|---|---|
| [01 O que o agente vê](Aula-01-O-que-o-agente-ve/) | O que entra no contexto e o que deveria entrar? |
| [02 AGENTS.md](Aula-02-AGENTS-md/) | O que vai no arquivo que o agente lê sempre? |
| [03 Guidelines sob demanda](Aula-03-Guidelines-sob-demanda/) | Onde ficam as convenções que só valem em certas tarefas? |
| [04 Skills](Aula-04-Skills/) | Como empacotar procedimentos que repetimos? |
| [05 Qual parte da spec entra em cada tarefa](Aula-05-Qual-parte-da-spec-entra-em-cada-tarefa/) | Como ligar cada tarefa aos documentos certos? |

## Preparação

- Projeto com `docs/` organizado e módulos (Módulos 09 e 10).

## Entregável do módulo

Na raiz do gestor: `AGENTS.md` enxuto, `docs/guidelines/` com ao menos três guidelines, ao menos duas skills e um modelo de Taskfile que aponta para os documentos certos.
