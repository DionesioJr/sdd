# O contrato: o que cada endpoint promete

Para cada operação:

| Elemento | Exemplo |
|---|---|
| Método e caminho | `POST /tarefas` |
| Entrada | `{ titulo: string, prazo?: string }` |
| Saída (sucesso) | `201 { id, titulo, status }` |
| Saídas (erro) | `400`, `404`, `500` com formato padrão |
| Requisito que atende | RF-01 |

O contrato é a **promessa** que o frontend e a API fazem uma à outra.

<!--
Mostrar um endpoint completo. Voltaremos ao OpenAPI/Zod no Módulo 10.
-->
