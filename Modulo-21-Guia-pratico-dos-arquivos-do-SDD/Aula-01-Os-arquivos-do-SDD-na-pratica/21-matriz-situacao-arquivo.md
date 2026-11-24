# A matriz: situação por arquivo

| Situação | requirements | design | ADR | tasks | Taskfile | AGENTS.md |
|---|---|---|---|---|---|---|
| **MVP do zero** | Cria | Cria | Cria | Cria | Cria | Cria |
| **Nova feature** | Novo RF | Só o afetado | Se difícil de reverter | Acrescenta | Cria | Raro |
| **Bug** | Se faltava critério | Se o desenho errou | Não | Registra | Opcional | Se o erro se repete |
| **Ajuste de regra** | Primeiro | Se afetar | Não | Acrescenta | Cria | Não |
| **Troca de tecnologia** | Não | Atualiza | Novo, substitui | Acrescenta | Cria | Atualiza comandos |
| **Refatoração** | Não | Se mudar a estrutura | Se for decisão | Registra | Cria | Não |

Folha de consulta: **imprima ou deixe aberta** no projeto.

<!--
Este é o slide que o aluno leva. Pedir que o salve como docs/_modelos/matriz-sdd.md.
-->
