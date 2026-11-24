# `AGENTS.md`: o que o agente sempre precisa saber

```md
# Gestor de Tarefas

## Comandos
- Testes: `npm test` · Tipos: `npx tsc --noEmit`

## Regras
- Siga docs/design.md. Não adicione dependências sem pedir.
- Antes de mudar a arquitetura, leia docs/architecture/adr/.
- Datas: use `date-fns`. Nunca `moment`.
- Toda mudança de comportamento começa em docs/requirements.md.

## Onde ler
- O quê: docs/requirements.md · Como: docs/design.md
- Plano: docs/tasks.md · Execução: docs/taskfiles/
```

**Use em**: toda sessão (o agente lê sozinho). **Mantenha**: menos de uma página; cada linha nasceu de um erro real.

<!--
Detalhes no Módulo 11, Aula 02. Aqui, mostrar apenas o essencial: comandos, regras e ponteiros.
-->
