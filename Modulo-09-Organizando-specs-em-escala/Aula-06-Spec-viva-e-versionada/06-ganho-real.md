# O ganho real

| Sem isso | Com isso |
|---|---|
| Mudança silenciosa | Mudança revisada e aprovada |
| "Quem mudou?" sem resposta | `git log` e PR respondem |
| Impossível voltar | `git revert` desfaz |
| Spec e código separados | Spec e código no mesmo repositório, mesma revisão |

**Ganho real**: a spec permanece confiável enquanto muda, e cada alteração deixa rastro.

<!--
Conectar: no Módulo 16, o CI vai checar se um PR de código aponta para uma spec aprovada.
-->
