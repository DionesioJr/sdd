# Branch: um experimento isolado

```bash
git switch -c experimento-filtros   # cria e entra
# o agente trabalha aqui
git switch main                     # volta ao estado estável
```

- Deu certo: junte com `git merge`.
- Deu errado: descarte a branch, e a `main` nunca foi tocada.

Uma branch por tarefa é uma prática que o curso usa até a fábrica de agentes.

<!--
Dependendo da versão do Git, o branch padrão pode ser master ou main. Combinar o nome com a turma.
-->
