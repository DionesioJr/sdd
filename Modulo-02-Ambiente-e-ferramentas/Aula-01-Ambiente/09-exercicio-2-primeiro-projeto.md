# Exercício 2: O primeiro projeto TypeScript

**Objetivo**: criar a pasta do projeto que atravessa o curso e ver o compilador em ação.

1. Crie e entre na pasta:
   ```bash
   mkdir gestor-de-tarefas
   cd gestor-de-tarefas
   npm init -y
   npm install -D typescript
   npx tsc --init
   ```
2. Crie `tarefa.ts` com o tipo `Tarefa` do slide anterior e uma função `concluir`.
3. Rode `npx tsc --noEmit`.

---

## Exercício 2: Provoque o erro

4. Dentro de `concluir`, tente atribuir `t.finalizada = true`.
5. Rode `npx tsc --noEmit` de novo e leia a mensagem.

**Observe**: o compilador disse exatamente qual propriedade não existe? Imagine isso acontecendo quando o agente inventa um campo.

<!--
Tempo: 20 min.
Deixar o aluno ler a mensagem de erro em voz alta. Aprender a ler erros do compilador será útil para dar feedback preciso ao agente (Módulo 03).
-->
