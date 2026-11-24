## Cenário 2 · Nova feature: o prompt e o mini-spec

```
Quero etiquetas nas tarefas. Leia requirements.md e design.md.
Antes de escrever, analise o impacto: módulos, dados, contratos de API,
RF afetados e testes que mudam. Depois proponha o RF-07 com critérios
e só as mudanças necessárias no design. Não altere o que não muda.
```

O resultado no `requirements.md`:

```md
### RF-07 Etiquetas  (Feature · v2)
O usuário adiciona até 5 etiquetas a uma tarefa e filtra por etiqueta.
**Critérios de aceite**
- CA-07.1: etiqueta adicionada → aparece na tarefa.
- CA-07.2: sexta etiqueta → recusa com "Máximo de 5 etiquetas".
- CA-07.3: filtro por etiqueta → lista só as tarefas com ela.
```

Depois: **aprovar** → atualizar o design → gerar as tarefas.

<!--
A análise de impacto evita surpresas: se a feature toca muitos módulos, talvez sejam várias features (Módulo 14, Aula 03).
-->
