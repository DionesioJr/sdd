## Cenário 1 · MVP do zero: prompts das etapas 4 a 6

```
# 4. docs/tasks.md
Leia requirements.md e design.md. Gere docs/tasks.md: tarefas pequenas,
esqueleto ponta a ponta primeiro; cada uma com Atende, Depende de,
Pronto quando e Verificação. Inclua a tabela de Cobertura e aponte
qualquer RF sem tarefa.

# 5. docs/taskfiles/T-01.md e execução
Gere o Taskfile da T-01 a partir do tasks.md, citando só o necessário.
(você revisa)
Execute a tarefa em docs/taskfiles/T-01.md. Escreva o teste primeiro
e mostre que falha; depois implemente e rode a verificação.

# 6. Fechar o MVP
Percorra todos os critérios de aceite. Para cada um, informe o teste
e o resultado. Liste o que ficou sem teste.
```

**Repita a etapa 5** para cada tarefa: commit, `[x]` no `tasks.md` e Taskfile arquivado.

<!--
Falhas encontradas na etapa 6 viram novas tarefas no tasks.md, e não correções no improviso.
-->
