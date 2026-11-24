# De que o contexto é feito

| Camada | Quem decide | Quando entra |
|---|---|---|
| Instruções do sistema | A ferramenta | Sempre |
| `AGENTS.md` | Você | Sempre (início da sessão) |
| Seu pedido e o Taskfile | Você | Na tarefa |
| Arquivos que o agente lê | O agente | Durante a tarefa |
| Saída de comandos e testes | O ambiente | Durante a tarefa |

O que entra **sempre** custa em **toda** sessão. O que entra **sob demanda** só custa quando é usado.

<!--
Este quadro organiza o módulo: AGENTS.md (sempre), guidelines e skills (sob demanda), Taskfile (por tarefa).
-->
