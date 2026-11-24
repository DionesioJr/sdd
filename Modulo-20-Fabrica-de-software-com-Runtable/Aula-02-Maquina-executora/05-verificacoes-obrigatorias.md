# Verificações obrigatórias

Cadastre, por repositório, as **checagens bloqueantes**:

| Checagem | Comando |
|---|---|
| Lint | `npm run lint` |
| Tipagem | `npx tsc --noEmit` |
| Testes | `npm run test:docker` |
| Build | `npm run build` |

A esteira só entrega a tarefa **com as checagens verdes**. São os mesmos **portões** do pipeline do Módulo 16, agora verificados **antes** de abrir o PR.

Lembre: as checagens usam os **mesmos comandos** do projeto (Módulo 13).

<!--
Detalhe: o cadastro das checagens é feito na configuração do repositório, na plataforma.
-->
